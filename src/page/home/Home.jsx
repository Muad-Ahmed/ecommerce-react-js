import React, { useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider";
import "./home.css";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import SlideProductLoading from "../../components/slideProducts/SlideProductLoading";
import PageTransition from "../../components/PageTransition";

function Home({ categories }) {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await res.json();

            return { [category]: data.products };
          })
        );
        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.error("Error Fetching", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <PageTransition>
      <div>
        <HeroSlider />

        {/* ▼ PRODUCTS SLIDERS ▼ */}
        {isLoading
          ? categories.map((category) => <SlideProductLoading key={category} />)
          : categories.map((category) => (
              <SlideProduct
                key={category}
                data={products[category]}
                title={category}
              />
            ))}

        {/* ▲ PRODUCTS SLIDERS ▲  */}
      </div>
    </PageTransition>
  );
}

export default Home;
