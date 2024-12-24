import * as React from "react";
import Link from "next/link";

export const FooterLink = ({ text, href }) => (
  <Link href={href} className="mt-4 font-medium text-stone-500 font-kumbhSans">{text}</Link>
);