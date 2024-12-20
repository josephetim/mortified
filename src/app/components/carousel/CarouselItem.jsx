import Image from "next/image";

export default function CarouselItem({icon}) {
    return (
        <div className="carousel-item">
            <Image
                src={icon}
                alt="Icon"
                width={200}
                height={200}
            />
        </div>
    )
}