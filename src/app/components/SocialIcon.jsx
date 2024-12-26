import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export const SocialIcon = ({ src, alt, href }) => (
  <Link href={href}>
      <Image
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
    />
  </Link>

);