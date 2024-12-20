"use client"
import * as React from "react";
import {ValueCards } from "../components/ValueCard";
import { NavBar } from "../components/NavBar";
import Accordion from "../components/AccordionItem";
import { programsList } from "./ProgramsData";
import BasicCarousel from "../components/carousel/Carousel";
import NewsletterSection from "../components/NewsLetter";
import { Footer } from "../components/Footer";

const navItems = [
  { label: "LOGO" },
  { label: "Home", isActive: true },
  { label: "About Us" },
  { label: "Sermons" },
  { label: "Contact" }
];



export function LandingPage() {
  return (
    <div className="flex overflow-hidden flex-col  pt-5 bg-stone-950 max-md:pt-24">
      
      <NavBar />
      <div className="flex flex-col items-center">
      <div className="mt-28 text-6xl font-bold text-center font-garamond text-white leading-[90px] w-[929px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
        THE MORTIFIED CHRISTIAN GROWTH AND DISCIPLESHIP PLATFORM
      </div>
      
      <div className="mt-8 text-xl text-center font-kumbhSans text-stone-300 w-[771px] max-md:max-w-full">
        Welcome to the Mortified Christian Growth Platform. This is the family
        of God and the body of Christ. We are glad to have you in our community
        where we uphold the teachings of the basic Christian faith. Feel free to
        browse through our programs. We'd be more than excited to have you join
        our community.
      </div>
      
      <button className=" font-poppins gap-2.5  p-4 mt-20 text-xl bg-white rounded-lg text-stone-950 max-md:mt-10">
        Join our community
      </button>
      
      <div className="flex overflow-hidden flex-col justify-center items-center self-stretch px-16 py-32 mt-20 w-full bg-stone-950 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 w-full items-center justify-between -mb-6 max-md:mb-2.5 max-md:max-w-full">
          <div className="flex flex-col self-stretch  my-auto min-w-[240px] w-[426px] max-md:max-w-full">
            <div className="flex flex-col w-full font-semibold max-md:max-w-full">
              <div className="font-kumbhSans gap-2.5 self-start px-4 py-2.5 text-[15px] font-normal  text-white rounded-3xl bg-zinc-800">
                ABOUT US
              </div>
              <div className=" font-kumbhSans text-[36px] font-normal mt-6 text-4xl text-neutral-200 max-md:max-w-full">
                Who we are, what we do and what we stand for.
              </div>
            </div>
            <div className="flex flex-col items-start mt-7 w-full max-md:max-w-full">
              <div className="flex max-w-full rounded-lg border border-solid bg-neutral-900 border-neutral-800 min-h-[86px] w-[228px]" />
              <div className="flex mt-6 max-w-full rounded-lg border border-solid bg-neutral-900 border-neutral-800 min-h-[86px] w-[368px]" />
            </div>
          </div>
          <div className="flex flex-col self-stretch my-auto text-xl leading-8 min-w-[240px] w-[603px] max-md:max-w-full">
            <div className="font-kumbhSans text-white max-md:max-w-full">
              <span className="font-semibold">Mortified{" "}</span>
                
              <span className="text-stone-300">
              is a non-denominational, Christian Discipleship and{" "}
                normal Christian life. We are not bound by geographical factors{" "}
                thereby ensuring that the gospel of the kingdom reaches out to{" "}
              </span>
              <span className="text-stone-300">
                the believer in every part of the world.
              </span>
            </div>
            <div className="font-kumbhSans mt-6 text-stone-300 max-md:max-w-full">
              We undertake trainings for our members who are interested 
             
              having help and guidance with their spiritual walk, through our
          
              various programs, targeted at achieving growth in the lives of
              our trainee members. Refer to our programs page to find an <br />
              outline of our programs
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex overflow-hidden flex-col self-stretch px-12 py-20 w-full bg-stone-950 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center self-center max-w-full font-semibold w-[728px]">
          <div className="flex flex-col justify-center w-full max-md:max-w-full">
            <div className="font-kumbhSans gap-2.5 self-center px-4 py-2.5 text-[15px] font-normal text-white rounded-3xl bg-zinc-800">
              OUR VALUES
            </div>
            <div className="font-kumbhSans font-normal text-[36px] mt-6 text-4xl text-center text-neutral-200 max-md:max-w-full">
              At the heart of our mission are the values that guide us in faith,
              love and service
            </div>
          </div>
        </div>
        <ValueCards />
      </div>
      <div className="flex overflow-hidden flex-col px-16 py-16 bg-stone-950 max-md:px-5">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              <div className="font-kumbhSans gap-2.5 self-start px-4 py-2.5 text-base text-white rounded-3xl bg-zinc-800">
                OUR PROGRAMS
              </div>
              <div className="font-kumbhSans font-normal mt-7 text-4xl text-neutral-200 max-md:max-w-full">
                Pathways to <br />
                Spiritual Growth
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
            <div className="font-kumbhSans text-xl leading-8 text-stone-300 max-md:mt-10 max-md:max-w-full">
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
    <div>
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
              <div className="font-kumbhSans gap-2.5 self-center px-4 py-2.5 text-[15px] font-normal text-white rounded-3xl bg-zinc-800">
                PROOF OF MINISTRY
              </div>
              <div className="font-kumbhSans font-normal text-[36px] mt-6 text-4xl text-center text-neutral-200 max-md:max-w-full">
                Stories of Faith, Growth and Transformation
              </div>
          </div>
          <div className="align-middle justify-center mt-[32px] w-[612px] pl-20 pb-10">
          <BasicCarousel />
          </div>
          
          
    </div>
    <div className="px-3">
    <NewsletterSection />

    </div>
      </div>
    
    
    <div className="mt-[159px]">
    <Footer />
    </div>

    </div>
  );
}