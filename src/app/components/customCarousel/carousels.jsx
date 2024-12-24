"use client";

import { useState } from "react";
import {  images } from "../../assets/images/images";
import Image from "next/image";
import { icons } from "../../assets/icons/icons";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleItemsCount = () => {
    if (window.innerWidth < 640) return 1; // Small screens
    if (window.innerWidth < 1024) return 2; // Medium screens
    return 3; // Large screens
  };

  const visibleItemsCount = getVisibleItemsCount();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.ceil(images.length / visibleItemsCount) - 1;
      return prevIndex < maxIndex ? prevIndex + 1 : 0;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.ceil(images.length / visibleItemsCount) - 1;
      return prevIndex > 0 ? prevIndex - 1 : maxIndex;
    });
  };

  const visibleImages = images.slice(
    currentIndex * visibleItemsCount,
    currentIndex * visibleItemsCount + visibleItemsCount
  );

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Carousel Container */}
      <div className="overflow-hidden w-[900px]">
        <div className="flex transition-transform duration-500">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${
                visibleItemsCount === 1
                  ? "w-full"
                  : visibleItemsCount === 2
                  ? "w-1/2"
                  : "w-1/3"
              } p-2`}
            >
              <Image
                src={image}
                alt={`Slide ${index}`}
                className="rounded-lg aspect-square object-contain w-[341px] h-[505px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-0"
        onClick={handlePrev}
      >
       <Image 
                src={icons.carousel_prev}
                alt="carousel_prev"
                className="object-contain aspect-square w-[64px] h-[64px]"
       />
      </button>
      <button
        className="absolute right-0  p-3 rounded-full"
        onClick={handleNext}
      >
      <Image 
                src={icons.carousel_next}
                alt="carousel_next"
                className="object-contain aspect-square  w-[64px] h-[64px]"

       />
      </button>
    </div>
  );
};

export default function App() {
  const imagesList = [
    images.carouselImg1,
    images.carouselImg2,
    images.carouselImg1,
    images.carouselImg2,
    images.carouselImg1,
    images.carouselImg2,
  ];

  return (
    <div className="container mx-auto py-10">
      <Carousel images={imagesList} />
    </div>
  );
}
