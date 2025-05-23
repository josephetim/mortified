"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { images } from "../assets/images/images";
import Image from "next/image";

const Carousel = () => {
  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "auto" }}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {[{src:images.carouselImg1},{src:images.carouselImg2},{src:images.carouselImg1}, {src:images.carouselImg2}].map((card, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "300px",
              background: "transparent",
              borderRadius: "10px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <Image 
              src={card.src}
              alt={card.src}
              className="w-[230px] h-[401px] aspect-square object-contain"
              
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
