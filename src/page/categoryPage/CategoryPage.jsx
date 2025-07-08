import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/slideProducts/product";
import PageTransition from "../../components/PageTransition";
import SlideProductLoading from "../../components/slideProducts/SlideProductLoading";
import "./categoryPage.css";

function CategoryPage() {
  const { category } = useParams();

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryProducts(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [category]);

  return (
    <PageTransition key={category}>
      <div className="category">
        {isLoading ? (
          <SlideProductLoading key={category} />
        ) : (
          <div className="container">
            <div className="top-slide">
              <h2>
                {category.replace("-", " ")} : {categoryProducts.limit}
              </h2>
              <p>
                lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, voluptates
              </p>
            </div>

            <div className="products">
              {categoryProducts.products.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}

export default CategoryPage;

//
