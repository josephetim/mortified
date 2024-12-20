import * as React from "react";
import Image from "next/image";

export const SocialIcon = ({ src, alt }) => (
  <Image
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
  />
);