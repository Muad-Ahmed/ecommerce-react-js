import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import Product from "../../components/slideProducts/product";
import SlideProductLoading from "../../components/slideProducts/SlideProductLoading";

function SearchResultPage() {
  const query = new URLSearchParams(useLocation().search).get("query");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );

        const data = await res.json();
        setResults(data.products || []);
      } catch (error) {
        console.error("Search Error :", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) fetchResults();
  }, [query]);

  return (
    <PageTransition key={query}>
      <div className="category">
        {isLoading ? (
          <SlideProductLoading key={query} />
        ) : (
          <div className="container">
            {results.length > 0 ? (
              <>
                <div className="top-slide">
                  <h2>Results for : {query}</h2>
                </div>
                <div
                  className="products"
                  style={{
                    padding: "50px 0",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: "20px",
                  }}
                >
                  {results.map((item, index) => (
                    <Product item={item} key={index} />
                  ))}
                </div>
              </>
            ) : (
              <p style={{ marginTop: "9px", fontSize: "20px" }}>
                Sorry, No Results Found.
              </p>
            )}
          </div>
        )}
      </div>
    </PageTransition>
  );
}

export default SearchResultPage;
