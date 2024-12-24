"use client";

import { useState } from "react";
import Image from "next/image";

export default function Accordion({ items }) {
  const [openAccordion, setOpenAccordion] = useState(null); // Tracks the currently open accordion index

  const handleAccordionToggle = (index) => {
    setOpenAccordion(openAccordion === index ? null : index); // Toggle the clicked accordion
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          edition={item.edition}
          size={item.size}
          download={item.download}
          subtitle={item.subtitle}
          description={item.description}
          iconSrc={item.iconSrc}
          isOpen={openAccordion === index} // Check if the current accordion is open
          onClick={() => handleAccordionToggle(index)} // Handle toggle click
        />
      ))}
    </div>
  );
}

function AccordionItem({ title, subtitle, description, iconSrc, isOpen, onClick, download, edition, size }) {
  return (
    <div
      className={` flex flex-col w-full border-b border-solid border-b-zinc-100 ${
        isOpen ? "bg-stone-950 text-white" : "bg-stone-950 text-white"
      }`}
    >
      {/* Accordion Header */}
      <div
        className="flex flex-row justify-between items-center px-4 py-8 cursor-pointer"
        onClick={onClick}
      >
        <div className="flex flex-col">
          <div className="text-3xl leading-none mb-[12px] text-[32px] font-normal font- font-kumbhSans">
            {title}
          </div>

          {subtitle && (
            <div className="mt-1 text-base leading-6 font-normal text-[16px] font-kumbhSans">
              {subtitle}
            </div>
          )}
          {
            download && (<div className="flex flex-row">
              <p className="font-kumbhSans leading-7 text-[16px] text-[#828282] font-normal">{`${edition} ${ " "} .`} </p> 
              <p className="font-kumbhSans leading-7 text-[16px] text-[#828282] font-normal">{" " + " " + size}</p>
            </div>)
          }


        </div>
        {subtitle && <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <Image
            loading="lazy"
            src={iconSrc}
            alt={`${title} icon`}
            className="object-contain aspect-square w-[64px] h-[64px]"
          />
        </div>}
          {
            download && (<Image loading="lazy" src={iconSrc} alt={`${title} icon`}
              className="object-contain aspect-square w-[32px] h-[32px]" />)
          }

      </div>

      {/* Accordion Content */}
     {description && (<div
        className={`overflow-hidden transition-all duration-500 ease-in-out  ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="font-kumbhSans px-4 pb-[32px] text-base leading-8  border-solid text-[#E0E0E0] border-t-zinc-100">
          {description}
        </div>
      </div>)}
    </div>
  );
}
