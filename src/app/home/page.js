"use client"
import * as React from "react";
import {ValueCards } from "../components/ValueCard";
import { NavBar } from "../components/NavBar";
import Accordion from "../components/AccordionItem";
import { programsList } from "./ProgramsData";
import Carousel from '../components/customCarousel/carousels'
import BasicCarousel from "../components/carousel/Carousel";
import NewsletterSection from "../components/NewsLetter";
import { Footer } from "../components/Footer";
import Image from "next/image";
import { images } from "../assets/images/images";
import MobileCarousel from "../components/mobileCarousel/carousel";

const navItems = [
  { label: "LOGO" },
  { label: "Home", isActive: true },
  { label: "About Us" },
  { label: "Sermons" },
  { label: "Contact" }
];



export function LandingPage() {
  return (
    <div  className="bg-stone-950">
      <section data-page="1" className="hidden"></section>
      <div className="flex overflow-hidden items-center flex-col    bg-stone-950 max-sm:pt-0 max-md:pt-24">
  
      <div className="flex  flex-col items-center pl-[70px] pr-[90px] max-sm:px-[16px] max-sm:w-[-webkit-fill-available]">
        <div   style={{ backgroundImage: `url('/herobg.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}  className="relative flex flex-col items-center ">
        {/* <NavBar /> */}

        <div  className=" mt-[20%] text-6xl font-bold text-center font-garamond text-white leading-[90px] max-sm:w-[auto] md:w-[929px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
        THE MORTIFIED CHRISTIAN GROWTH AND DISCIPLESHIP PLATFORM
      </div>
      
      <div className="max-sm:mt-[32px] mt-[24px] max-sm:text-[14px] text-xl text-center font-kumbhSans text-stone-300 max-sm:w-[auto] w-[771px] max-md:max-w-full">
        Welcome to the Mortified Christian Growth Platform. This is the family
        of God and the body of Christ. We are glad to have you in our community
        where we uphold the teachings of the basic Christian faith. Feel free to
        browse through our programs. We'd be more than excited to have you join
        our community.
      </div>
      
      <a
      href="tg://resolve?domain=TheMortified"
      rel="noopener noreferrer"
      onclick="window.location.href='https://t.me/TheMortified'"
      target="_blank"
      className="  font-poppins gap-2.5  p-4 max-sm:mt-[32px] mt-20 text-xl bg-white rounded-lg text-stone-950 max-md:mt-10">
        Join our community
      </a>
        </div>
      
      
      <div className="flex overflow-hidden flex-col justify-center items-center self-stretch max-sm:mt-[87px] max-sm:py-[0px] py-32 mt-20 w-full bg-stone-950 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap max-sm:gap-[69px] gap-10 w-full items-center justify-between -mb-6 max-md:mb-2.5 max-md:max-w-full">
          <div className="flex flex-col self-stretch  my-auto max-sm:items-center min-w-[240px] w-[426px] max-md:max-w-full">
            <div className="flex flex-col w-full font-semibold max-md:max-w-full">
              <div className="font-kumbhSans gap-2.5 max-sm:self-center self-start px-4 py-2.5 text-[15px] font-normal  text-white rounded-3xl bg-zinc-800">
                ABOUT US
              </div>
              <div className=" font-kumbhSans max-sm:text-[24px] text-[36px] max-sm:mt-[24px] font-semibold mt-6 text-4xl text-neutral-200 max-md:max-w-full max-sm:text-center">
                Who we are, what we do and what we stand for.
              </div>
            </div>
            <div className="flex flex-col items-start mt-7 w-full max-md:max-w-full max-sm:items-center">
              <div className="flex max-w-full max-sm:min-h-[45px] max-sm:w-[148px] rounded-lg border border-solid bg-neutral-900 border-neutral-800 min-h-[86px] w-[228px]" />

              <div className="flex mt-6 max-sm:min-h-[48px] max-sm:w-[212px] max-w-full max-sm:rounded-[8px] rounded-lg border border-solid bg-neutral-900 border-neutral-800 min-h-[86px] w-[452px]" />
            </div>
          </div>
          <div className="flex flex-col self-stretch my-auto text-xl leading-8 min-w-[240px] w-[603px] max-md:max-w-full">
            <div className="font-kumbhSans max-sm:text-center max-sm:text-[14px] text-white max-md:max-w-full">
              <span className="font-semibold ">Mortified{" "}</span>
                
              <span className="text-[#BDBDBD]">
              a non-denominational, Christian Discipleship and 
              growth platform that fosters the believer’s journey. We hold fast 
              the tenets of scripture with relation to Christian doctrine and the 
              normal Christian life. We are not bound by geographical factors 
              thereby ensuring that the gospel of the kingdom reaches out to 
              the believer in every part of the world.
              </span>
              <span className="text-[#BDBDBD] max-sm:text-center">
                the believer in every part of the world.
              </span>
            </div>
            <div className="font-kumbhSans mt-6 max-sm:text-[14px] max-sm:text-center text-[#BDBDBD] max-md:max-w-full">
              We undertake trainings for our members who are interested 
             
              having help and guidance with their spiritual walk, through our
          
              various programs, targeted at achieving growth in the lives of
              our trainee members. Refer to our programs page to find an 
              outline of our programs
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex overflow-hidden flex-col self-stretch max-sm:py-[99px] max-sm:px-0  py-20 w-full bg-stone-950 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center self-center max-w-full font-semibold w-[728px]">
          <div className="flex flex-col justify-center w-full max-md:max-w-full">
            <div className="font-kumbhSans gap-2.5 self-center px-4 py-2.5 text-[15px] font-normal text-white rounded-3xl bg-zinc-800">
              OUR VALUES
            </div>
            <div className="font-kumbhSans max-sm:text-[24px] font-semibold text-[36px] mt-6 text-4xl text-center text-neutral-200 max-md:max-w-full">
              At the heart of our mission are the values that guide us in faith,
              love and service
            </div>
          </div>
        </div>
        <ValueCards />
      </div>
      <div className="flex overflow-hidden flex-col max-sm:py-[0px] max-sm:px-0  py-16 bg-stone-950 max-md:px-5">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-sm:gap-[32px] max-md:flex-col">
          <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10  max-md:max-w-full">
              <div className="font-kumbhSans gap-2.5 max-sm:self-center self-start px-4 py-2.5 text-base text-white rounded-3xl bg-zinc-800">
                OUR PROGRAMS
              </div>
              <div className="font-kumbhSans max-sm:text-[24px] font-semibold mt-7 max-sm:text-center text-4xl text-neutral-200 max-md:max-w-full">
                Pathways to <br />
                Spiritual Growth
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
            <div className="font-kumbhSans max-sm:mt-[0px] max-sm:text-[16px] text-xl max-sm:text-center leading-8 text-[#BDBDBD] max-md:mt-10 max-md:max-w-full">
              Designed to nurture spiritual growth and deepen your walk with
              Christ, our
              programs offer a range of opportunities to learn, serve, and
              connect. From Bible studies and mentorship to outreach and
              fellowship gatherings,
              each program is crafted to equip you with the tools and support
              needed to
              
              grow in faith and live out your purpose in God's kingdom.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-28 w-full max-md:mt-10 max-md:max-w-full">
        <Accordion items={programsList}/>
      </div>
    </div>
    <div className="flex flex-col items-center w-full max-sm:mt-[107px]">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
              <div className="font-kumbhSans gap-2.5 self-center px-4 py-2.5 text-[15px] font-normal text-white rounded-3xl bg-zinc-800">
                PROOF OF MINISTRY
              </div>
              <div className=" max-sm:mt-[24px] font-kumbhSans max-sm:text-[24px] font-normal text-[36px] mt-6 text-4xl text-center text-neutral-200 max-md:max-w-full">
                Stories of Faith, Growth and Transformation
              </div>
          </div>
          <div className=" mt-[32px] w-[100%]  pb-10">
            <div className="max-sm:hidden">
            <Carousel />
            </div>
            <div className="md:hidden lg:hidden hidden max-sm:flex">
                <MobileCarousel />
            </div>
            
           
          </div>
          
          
    </div>
      <div className="max-sm:hidden">
        <NewsletterSection />
      </div>
    </div>
  </div>
  <div className="bg-[#E0E0E0] hidden max-sm:flex max-sm:px-[21px]">
        <NewsletterSection />
      </div>
    <div className="mt-[159px] max-sm:mt-0">
      <Footer />
    </div>
    </div>

  );
}