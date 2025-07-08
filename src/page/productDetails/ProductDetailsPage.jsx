import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import "./productDetails.css";
import ProductDetailsLoading from "./ProductDetailsLoading";
import SlideProductLoading from "../../components/slideProducts/SlideProductLoading";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import PageTransition from "../../components/PageTransition";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoadingRelated, setIsLoadingRelated] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoadingRelated(false));
  }, [product]);

  if (!product) return <p>Product Not Found</p>;

  return (
    <PageTransition key={id}>
      <div>
        {IsLoading ? (
          <ProductDetailsLoading />
        ) : (
          <div className="item-details">
            <div className="container">
              <ProductImages product={product} />
              <ProductInfo product={product} />
            </div>
          </div>
        )}

        {isLoadingRelated ? (
          <SlideProductLoading />
        ) : (
          <SlideProduct
            key={product.category}
            data={relatedProducts}
            title={product.category}
          />
        )}
      </div>
    </PageTransition>
  );
}

export default ProductDetails;
