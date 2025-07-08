import React, { useState } from "react";

function ProductImages({ product }) {
  const [mainImg, setMainImg] = useState(product.images[0]);

  return (
    <div className="imgs-item">
      <div className="big-img">
        <img id="big-img" src={mainImg} alt={product.title} />
      </div>

      <div className="sm-img">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={product.title}
            onClick={() => setMainImg(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
