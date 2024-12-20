import React from 'react';
import Image from 'next/image';

export default function PastorateCard({icon, name, title}) {
  return (
    <div className='flex flex-col gap-[28px]'>
        <Image 
            src={icon}
            alt="pastor"
            className='object-contain aspect-square w-[266px] h-[284px]'
        />
        <div  className='flex flex-col'>
            <p className='font-kumbhSans text-[32px] font-semibold text-[#FFFFFF] '>{name}</p>
            <p className='font-kumbhSans text-[24px] font-normal text-[#FFFFFF]'>{title}</p>
        </div>
        
    </div>
  )
}
