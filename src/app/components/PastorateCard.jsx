import React from 'react';
import Image from 'next/image';

export default function PastorateCard({icon, name, title}) {
  return (
    <div className='flex flex-col gap-[28px]'>
        <Image 
            src={icon}
            alt="pastor"
            className='object-contain aspect-square max-sm:w-[171px] max-sm:h-[171px] w-[266px] h-[284px]'
        />
        <div  className='flex flex-col'>
            <p className='font-kumbhSans text-[32px] max-sm:text-[16px] font-semibold text-[#FFFFFF] '>{name}</p>
            <p className='font-kumbhSans text-[24px] max-sm:text-[12px] font-normal text-[#FFFFFF]'>{title}</p>
        </div>
        
    </div>
  )
}
