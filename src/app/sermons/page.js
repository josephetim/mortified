import React from 'react';
import { NavBar } from '../components/NavBar';
import { images } from '../assets/images/images';
import Image from 'next/image';
import { icons } from '../assets/icons/icons';
import { sermons } from './sermons';
import Accordion from '../components/AccordionItem';
import Pagination from '../components/Pagination';
import { Footer } from '../components/Footer';

export default function Page() {
  return (
    <div className='bg-stone-950'>
        <div
            className=""
            style={{ backgroundImage: `url('/swordbg.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
        >
            <div className="flex items-center justify-center pt-6">
            <NavBar />
            </div>
            <div className='pl-[70px] pt-[100px] pb-[109px]'>
                <div className='mb-[43px]'>
                <p className=' mb-5  font-garamond font-semibold w-[522] text-[96px] leading-[1.1] text-[#FFFF] '>MORTIFIED<br/> SERMONS.</p>
                {/* <p className=' mt-0 font-garamond font-normal text-[96px] text-[#FFFF]'>  SERMONS.</p> */}
                <p className='font-kumbhSans text-[36px] font-normal text-[#8E8E8E] w-[522px]'>The sword of the Spirit with an electronic edge</p>
               
                </div>
                <Image 
                src={icons.arr_dwn}
                className='object-contain aspect-square w-[64px] h-[64px]'
                alt="go down"
            />
            </div>
        </div>

     <div className="flex overflow-hidden flex-col justify-center items-center self-stretch px-16 py-32  w-full bg-stone-950 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between w-full items-center -mb-6 max-md:mb-2.5 max-md:max-w-full">
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[426px] max-md:max-w-full">
            <div className="flex flex-col w-full font-semibold max-md:max-w-full">
              <div className="font-kumbhSans gap-2.5 self-start px-4 py-2.5 text-[15px] font-normal  text-white rounded-3xl bg-zinc-800">
                GOD'S MESSAGE TO YOU TODAY
              </div>
              <div className=" font-kumbhSans text-[36px] font-normal mt-6 text-4xl text-neutral-200 max-md:max-w-full">
              Access and download impactful <span className="text-[#828282]"> sermons </span> from past Mortified editions to <span className="text-[#828282]"> deepen </span> your faith
           
              </div>
            </div>
            <div className="flex flex-col items-start mt-7 w-full max-md:max-w-full">
              <div className="flex max-w-full rounded-lg border border-solid bg-neutral-900 border-neutral-800 min-h-[86px] w-[228px]" />
              <div className="flex mt-6 max-w-full rounded-lg border border-solid bg-neutral-900 border-neutral-800 min-h-[86px] w-[452px]" />
            </div>
          </div>
          <div className="flex flex-col self-stretch my-auto text-xl leading-8 min-w-[240px] w-[603px] max-md:max-w-full">
           
            <div className="font-kumbhSans mt-6 text-stone-300 max-md:max-w-full">
            Dive into a treasure trove of wisdom and spiritual growth with
            sermons from past Mortified editions. Each message is crafted
            to inspire, challenge, and guide you on your journey of faith.
            Download, listen, and let these teachings transform your walk
            with God.
            </div>
          </div>
        </div>
        </div>

        <div className='mt-5 px-16'>
            <Accordion items={sermons}/>
        </div>

        <div className='items-center flex flex-col mt-12 mb-10 justify-center'>
        <p className='font-kumbhSans text-[#FFFFFF] font-normal text-[16px] mb-4'>Page</p>
            <Pagination totalPages={6}/>
        </div>
        <Footer />
    </div>
  );
}
