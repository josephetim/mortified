
"use client"
import Carousel from "react-multi-carousel";

import CarouselItem from "./CarouselItem";
import { images } from "../../assets/images/images";
import { CarouselNextButton } from "./CarouselControls";
import { CarouselPrevButton } from "./CarouselControls";
import { CustomRightArrow } from "./CarouselControls";
import { CustomLeftArrow } from "./CarouselControls";

import 'react-multi-carousel/lib/styles.css'

export default function BasicCarousel() {
  console.log(Carousel);
  console.log(CarouselItem);
  console.log(images);
  
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className="items-center "
      containerClass="container"
      customLeftArrow={<CustomLeftArrow/>}
      customRightArrow={<CustomRightArrow/>}
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=" "
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 2,
          partialVisibilityGutter: 20
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
  
>

<CarouselItem icon={images.carouselImg1} />
  <CarouselItem icon={images.carouselImg2} />
  <CarouselItem icon={images.carouselImg1} />
  <CarouselItem icon={images.carouselImg2} />
  <CarouselItem icon={images.carouselImg1} />
  <CarouselItem icon={images.carouselImg2} />
  <CarouselItem icon={images.carouselImg1} />






</Carousel>
  )
}
