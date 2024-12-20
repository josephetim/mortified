"use client"
import * as React from "react";
import Link from "next/link"; // For Next.js navigation
import { Kumbh_Sans } from "next/font/google";

export function NavItem({ label, href, isActive, onClick }) {
  return (
    <Link
      href={href}
      className={`gap-2.5 self-stretch p-2.5 my-auto font-kumbhSans ${
        isActive ? "text-yellow-500" : "text-zinc-100"
      } whitespace-nowrap cursor-pointer`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

export function NavBar() {
  const [activeIndex, setActiveIndex] = React.useState(1); // Default to "Home"

  const navItems = [
    { label: "LOGO", href: "/" },
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Sermons", href: "/sermons" },
    { label: "Contact", href: "/contact" },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className="flex flex-wrap gap-8 w-[520px] justify-between items-center  py-2 text-base font-semibold rounded-xl border border-solid bg-neutral-950 border-neutral-800 text-zinc-100 max-md:max-w-full">
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          label={item.label}
          href={item.href}
          isActive={index === activeIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </nav>
  );
}
