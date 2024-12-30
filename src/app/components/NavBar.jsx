"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link"; // For Next.js navigation
import { icons } from "../assets/icons/icons";

export function NavItem({ label, href, isActive, onClick }) {
  return (
    <Link
      href={href}
      className={`gap-2.5 self-stretch p-2.5 my-auto font-kumbhSans ${
        isActive ? "text-yellow-500" : "text-zinc-100"
      } whitespace-nowrap cursor-pointer`}
      onClick={onClick}
    >
      {label === "LOGO" && (
        <Image
          alt="logo"
          className="aspect-square w-[45px] h-[45px] object-contain"
          src={icons.logo}
        />
      )}
      {label !== "LOGO" && label}
    </Link>
  );
}

export function NavBar() {
  const [activeIndex, setActiveIndex] = React.useState(1); // Default to 0 (Home)
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      const pageNumber = document.querySelector("section")?.dataset.page;
      if (pageNumber) {
        setActiveIndex(+pageNumber);
      }
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  const navItems = [
    { label: "LOGO", href: "/" },
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Sermons", href: "/sermons" },
    { label: "Contact", href: "/contact" },
  ];

  const handleClick = (index) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("page", index);
    }
    setActiveIndex(index);
  };

  return (
    <>
      <nav className="max-sm:hidden flex mt-7 fixed flex-wrap z-50 w-[520px] justify-around items-center py-2 text-base font-semibold rounded-xl border border-solid bg-neutral-950 border-neutral-800 text-zinc-100 max-md:max-w-full">
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
      <div className=" flex mt-[30px] z-10 max-sm:px-[30px] justify-between max-sm:w-full items-center sm:hidden">
        <Image
          alt="logo"
          className="aspect-square w-[45px] h-[45px] object-contain"
          src={icons.logo}
        />
        <button
          onClick={toggleSidebar}
          className="p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="text-2xl text-white">☰</span>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed z-50 top-0 right-0 h-full w-64 bg-[#181818] text-white transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={closeSidebar}
          className="absolute top-4 left-4 text-2xl focus:outline-none"
          aria-label="Close Menu"
        >
          ✖
        </button>
        <ul className="flex flex-col gap-6 mt-16 pl-8 text-base">
          {navItems.slice(1).map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={closeSidebar}
                className="hover:text-gray-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay (When Sidebar is Open) */}
      {/* {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10000"
          onClick={closeSidebar}
          role="presentation"
        ></div>
      )} */}
    </>
  );
}
