import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { cartItems, successUrl, cancelUrl } = req.body;

    if (!cartItems || cartItems.length === 0) {
        return res.status(400).json({ error: "Cart is empty" });
    }

    const lineItems = cartItems.map((item) => ({
        price_data: {
            currency: "usd",
            product_data: {
                name: item.title,
                images: [item.images[0]],
            },
            unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
    }));

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: lineItems,
            success_url: successUrl,
            cancel_url: cancelUrl,
        });

        return res.status(200).json({ url: session.url });
    } catch (err) {
        console.error("Stripe error:", err.message);
        return res.status(500).json({ error: "Failed to create checkout session" });
    }
}
