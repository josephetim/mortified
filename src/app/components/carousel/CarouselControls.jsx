import { icons } from "../../assets/icons/icons";
import Image from "next/image";

export function CarouselNextButton () {
    return (
        <button>
            <Image src={icons.carousel_next} width={12} height={12} alt="Next" />
        </button>
            
    );
}

export function CarouselPrevButton () {
    return (
            <Image  src={icons.carousel_prev} width={32} height={32} alt="Prev" />
    );
}

export const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
     return (
        <button className="absolute left-[85%]" onClick={() => onClick()} >
            <Image src={icons.carousel_next} width={64} height={64} alt="Next" />
        </button>
     ) 
    }

    export const CustomLeftArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
         return (
            <button className="absolute " onClick={() => onClick()} >
                <Image src={icons.carousel_prev} width={64} height={64} alt="Next" />
            </button>
         ) 
        }