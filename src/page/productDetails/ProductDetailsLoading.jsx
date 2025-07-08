import React from "react";

export default function ProductDetailsLoading() {
  return (
    <div className="loading-item">
      <div className="item-details">
        <div className="container">
          <div className="imgs-item skeleton"></div>

          <div className="details-item">
            <h5 className="loading-text skeleton"></h5>
            <h5 className="loading-text skeleton"></h5>
            <h5 className="loading-text skeleton"></h5>
            <h5 className="loading-text skeleton"></h5>
            <h5 className="loading-text skeleton"></h5>
          </div>
        </div>
      </div>
    </div>
  );
}
