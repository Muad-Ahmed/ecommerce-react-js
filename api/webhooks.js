import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export const config = {
    api: {
        bodyParser: false,
    },
};

async function getRawBody(req) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        req.on("data", (chunk) => chunks.push(chunk));
        req.on("end", () => resolve(Buffer.concat(chunks)));
        req.on("error", reject);
    });
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const sig = req.headers["stripe-signature"];
    const rawBody = await getRawBody(req);

    let event;
    try {
        event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
    } catch (err) {
        console.error("Webhook signature verification failed:", err.message);
        return res.status(400).json({ error: `Webhook Error: ${err.message}` });
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        console.log("Payment confirmed for session:", session.id);
        // TODO: Persist and fulfill the order here (e.g., update database)
    }

    return res.status(200).json({ received: true });
}
