"use client"
import React from 'react';
import { NavBar } from '../components/NavBar';
import { images } from '../assets/images/images';
import Image from 'next/image';
import { icons } from '../assets/icons/icons';
import { sermons } from './sermons';
import Accordion from '../components/AccordionItem';
import Pagination from '../components/Pagination';
import { Footer } from '../components/Footer';
import SermonContainer from '../components/SermonContainer';

export default function Page() {

    const scrollToSection = () => {
        const section = document.getElementById('sermons');
        section.scrollIntoView({ behavior: "smooth" });
    }
  return (
    <div className='bg-stone-950'>
              <section data-page="3" className="hidden"></section>
<div className='max-sm:px-[16px]'>
<div
            className="bg-sword max-sm:bg-none"
            style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
        >
            <div className=' pl-[70px] max-sm:pt-[22px] pt-[150px] pb-[109px] max-sm:pb-0 max-sm:pl-0 '>
                <div className='mb-[43px] max-sm:text-center'>
                <p className=' mb-5  font-garamond font-semibold max-sm:w-full  w-[522px] max-sm:text-[40px] text-[96px] leading-[1.1] text-[#FFFF] '>MORTIFIED<br/> SERMONS.</p>
                
                <p className='font-kumbhSans max-sm:text-[24px] text-[36px] font-normal max-sm:w-full text-[#8E8E8E] w-[522px]'>The sword of the Spirit with an electronic edge</p>
               
                </div>
                    <Image 
                    onClick={scrollToSection}
                    src={icons.arr_dwn} 
                    className='max-sm:hidden object-contain cursor-pointer aspect-square w-[64px] h-[64px]'
                    alt="go down"
                />
               
            </div>
        </div>

     <div id='sermons' className="flex overflow-hidden flex-col justify-center items-center self-stretch px-16 py-32 max-sm:py-0  w-full bg-stone-950 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between w-full items-center -mb-6 max-md:mb-2.5 max-md:max-w-full">
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[426px] max-md:max-w-full">
            <div className="flex flex-col w-full font-semibold max-md:max-w-full">
              <div className="font-kumbhSans gap-2.5 max-sm:self-center self-start px-4 py-2.5 text-[15px] font-normal  text-white rounded-3xl bg-zinc-800">
                GOD'S MESSAGE TO YOU TODAY
              </div>
              <div className=" font-kumbhSans max-sm:text-center max-sm:text-[24px] text-[36px] font-normal mt-6 text-4xl text-neutral-200 max-md:max-w-full">
              Access and download impactful <span className="text-[#828282]"> sermons </span> from Mortified  to <span className="text-[#828282]"> deepen </span> your faith
           
              </div>
            </div>
            <div className="flex flex-col items-start mt-7 w-full max-sm:items-center max-md:max-w-full">
              <div className="flex max-sm:min-h-[45px] max-sm:w-[148px] max-sm:min-w-[148px] max-w-full rounded-lg border border-solid bg-neutral-900 border-neutral-800 min-h-[86px] w-[228px]" />
              <div className="flex max-sm:min-h-[48px] max-sm:min-w-[212px] mt-6 max-w-full rounded-lg border border-solid bg-neutral-900 border-neutral-800 min-h-[86px] max-sm:w-[212px] w-[452px]" />
            </div>
          </div>
          <div className="flex flex-col self-stretch  text-xl leading-8 min-w-[240px] w-[603px] max-md:max-w-full">
           
            <div className="font-kumbhSans max-sm:text-center mt-6 text-stone-300 max-md:max-w-full">
            Dive into a treasure trove of wisdom and spiritual growth with
            sermons from Mortified. Each message is crafted
            to inspire, challenge, and guide you on your journey of faith.
            Download, listen, and let these teachings transform your walk
            with God.
            </div>
          </div>
        </div>
        </div>

        <div className='mt-5 px-16 max-sm:px-0 max-sm:hidden'>
            <Accordion items={sermons}/>
        </div>
        <div className='mt-5'>
          <SermonContainer />
        </div>

        <div className='items-center flex flex-col mt-12 mb-10 justify-center'>
        <p className='font-kumbhSans text-[#FFFFFF] font-normal text-[16px] mb-4'>Page</p>
            <Pagination totalPages={6}/>
        </div>
</div>

        <Footer />
    </div>
  );
}
