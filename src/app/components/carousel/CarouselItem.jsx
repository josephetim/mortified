import Image from "next/image";

export default function CarouselItem({icon}) {
    return (
        <div className="carousel-item flex flex-row gap-2">
            <Image
                src={icon}
                alt="Icon"
                width={300}
            />
            
        </div>
    )
}