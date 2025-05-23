import * as React from "react";
import { SocialIcon } from "./SocialIcon";
import { FooterLink } from "./FooterLink";
import Image from "next/image";
import { icons } from "../assets/icons/icons";

const companyLinks =[
    {title: "Home", href: "/"}, {title: "About Us", href: "/about"}, {title: "Contact Us", href: "/contact"}
]

const socialIcons = [
  { src: icons.twitter, alt: "Social media icon 1", href:"https://x.com/TheMortifiedOne?t=21h4wUeo4iIk8Uj7-gORJw&s=09" },
  { src: icons.facebook, alt: "Social media icon 2", href:"https://www.facebook.com/share/1EYEMPsaQh/" },
  { src: icons.instagram, alt: "Social media icon 3", href: "https://www.instagram.com/themortifiedone?igsh=d2h2b2xuZTRzcmI0" },

  
];

export const Footer = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center px-20 py-16 border-t  bg-stone-950 border-neutral-800 max-md:px-5">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start w-full text-xl max-md:max-w-full">
          <div className="flex flex-col grow shrink font-semibold w-[180px]">
            <div className="gap-2.5 self-start p-2.5 whitespace-nowrap text-zinc-100">
             <Image
                alt="logo"
                src={icons.logo}
                className="object-contain aspect-square w-[75px] h-[75px]"
             />
            </div>
            <div className="mt-6 text-stone-500 font-kumbhSans">The Mortified One</div>
            <div className="flex flex-wrap gap-10 justify-between items-center mt-16 max-w-full w-[990px] max-md:mt-10">
          <div className="max-sm:hidden flex gap-1 items-center self-stretch my-auto text-xl min-w-[240px] mt-[62px] text-stone-500">
            <div className="self-stretch my-auto w-[100px] font-normal font-kumbhSans">Copyright</div>
            <Image
              loading="lazy"
              src={icons.copyright}
              alt="Copyright symbol"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[25px]"
            />
            <div className="self-stretch font-normal my-auto w-[234px] font-kumbhSans">
              The Mortified One 2024
            </div>
          </div>
          
        </div>
          </div>
          <div className="flex gap-10 items-start min-w-[240px]">
            <div className="flex flex-col w-[137px]">
              <div className="font-semibold text-white font-kumbhSans">Company</div>
              <div className="flex flex-col mt-6 w-full ">
                {companyLinks.map((link, index) => (
                  <FooterLink key={index} href={link.href} text={link.title} />
                ))}
              </div>
              <div className="flex gap-6 items-center mt-[86.5px] self-stretch my-auto">
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>
            </div>
            <div className="max-sm:hidden flex flex-col whitespace-nowrap w-[196px]">
              <div className="font-semibold text-white font-kumbhSans">Website</div>
              <div className="mt-6 max-w-full font-medium font-kumbhSans text-stone-500 w-[196px]">
                Themortifedone.org
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className="md:hidden lg:hidden max-lg:hidden max-md:hidden max-sm:flex max-sm:w-full flex gap-1 items-center self-stretch my-auto text-xl min-w-[240px] mt-[62px] text-stone-500">
            <div className="self-stretch my-auto w-[100px]  font-normal max-sm:text-[14px] font-kumbhSans">Copyright</div>
            <Image
              loading="lazy"
              src={icons.copyright}
              alt="Copyright symbol"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[25px]"
            />
            <div className="self-stretch max-sm:text-[14px] font-normal  w-full font-kumbhSans">
              The Mortified One 2024
            </div>
          </div>
    </div>
  );
};