import React, { useContext } from "react";
import { CartContext } from "../../components/contexts/CartContext";
import PageTransition from "../../components/PageTransition";
import Product from "../../components/slideProducts/Product";

function Favorites() {
  const { favorites } = useContext(CartContext);

  return (
    <PageTransition>
      <div className="category FavoritesPage">
        <div className="container">
          <div className="top-slide">
            <h2>Your Favorites</h2>
          </div>

          {favorites.length === 0 ? (
            <p>No Favorites Products yet.</p>
          ) : (
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
              {favorites.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}

export default Favorites;
