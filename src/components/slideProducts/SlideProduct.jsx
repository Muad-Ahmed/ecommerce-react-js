// import React, { useRef, useState } from "react";
import Product from "./Product";
import "./slideProduct.css";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

function SlideProduct({ title, data }) {
  return (
    <div className="slide-products slide">
      <div className="container">
        <div className="top-slide">
          <h2>{title.replace("-", " ")}</h2>
          <p>
            lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            voluptates
          </p>
        </div>

        <Swiper
          loop={true}
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            530: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            830: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide>
              <Product item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideProduct;
