"use client"


import React, { useEffect } from "react";
import { images } from "../assets/images/images";
import Image from "next/image";

const Panorama = () => {
  useEffect(() => {
    // Add the external CSS link
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://panorama-slider.uiinitiative.com/assets/index.c1d53924.css";
    document.head.appendChild(link);

    // Add the module preload link
    const preloadLink = document.createElement("link");
    preloadLink.rel = "modulepreload";
    preloadLink.href =
      "https://panorama-slider.uiinitiative.com/assets/vendor.dba6b2d2.js";
    document.head.appendChild(preloadLink);

    // Add the external script
    const script = document.createElement("script");
    script.type = "module";
    script.crossOrigin = "anonymous";
    script.src =
      "https://panorama-slider.uiinitiative.com/assets/index.d2ce9dca.js";
    document.body.appendChild(script);

    // Cleanup script and links on unmount
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(preloadLink);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
          <div className="panorama-slider  ">
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <Image
              className="slide-image"
              src={images.tunnelImg1}
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <Image
              className="slide-image"
              src={images.tunnelImg2}
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <Image
              className="slide-image"
              src={images.tunnelImg3}
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <Image
              className="slide-image"
              src={images.tunnelImg4}
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <Image
              className="slide-image"
              src={images.tunnelImg5}
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <Image
              className="slide-image"
              src={images.tunnelImg6}
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <Image
              className="slide-image"
              src={images.tunnelImg7}
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <Image
              className="slide-image"
              src={images.tunnelImg8}
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <Image
              className="slide-image"
              src={images.tunnelImg9}
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <Image
              className="slide-image"
              src={images.tunnelImg10}
              alt=""
            />
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
    </>
  );
};

export default Panorama;