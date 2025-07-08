import React from "react";

function slideProductLoading() {
  return (
    <div className="loading-SlideProduct">
      <div className="slide-products slide">
        <div className="container">
          <div className="top-slide">
            <h2 className="skeleton"></h2>
            <p className="skeleton"></p>
          </div>

          <div className="prodcuts-loading">
            <div className="product">
              <div className="img-product skeleton"></div>
              <div className="content skeleton"></div>
              <div className="content skeleton"></div>
            </div>

            <div className="product">
              <div className="img-product skeleton"></div>
              <div className="content skeleton"></div>
              <div className="content skeleton"></div>
            </div>

            <div className="product">
              <div className="img-product skeleton"></div>
              <div className="content skeleton"></div>
              <div className="content skeleton"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default slideProductLoading;
