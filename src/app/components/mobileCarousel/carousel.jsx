"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { images } from "../../assets/images/images";
import Image from "next/image";

const Carousel = () => {
  return (
    <div style={{ width: "100%", maxWidth: "100%", margin: "auto" }}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {[{src:images.mobileCarousel1},{src:images.mobileCarousel2},{src:images.mobileCarousel1}, {src:images.mobileCarousel2}].map((card, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              display: "flex",
             
              width:"300px",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              borderRadius: "15.7px",
              fontSize: "20px",
              fontWeight: "bold",
             
            }}
          >
            <Image 
              src={card.src}
              alt={card.src}
              className=" aspect-square object-contain min-h-[401px] min-w-[230px] "
              
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
