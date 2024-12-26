import React from 'react'
import { NavBar } from '../components/NavBar'
import { icons } from '../assets/icons/icons';
import Image from 'next/image';
import { SocialIcon } from '../components/SocialIcon';
import Panorama from '../components/TunnelCarousel';
import { images } from '../assets/images/images';

export default function Contact() {
    const socialIcons = [
        { src: icons.twitter, alt: "Social media icon 1" },
        { src: icons.facebook, alt: "Social media icon 2" },
        { src: icons.instagram, alt: "Social media icon 3" },
        { src: icons.youtube, alt: "Social media icon 4" },
      ];
  return (
    <div className='bg-[#0E0E0E] '>
       <div className="flex items-center justify-center pt-6">
       <section data-page="4" className="hidden"></section>

            </div>
        <div className='flex items-center justify-center'>
            <p className='font-garamond text-white text-[96px] mt-16 '>We want to hear from you</p>
        </div>
        <div>
            <Panorama />
        </div>
        <div className='flex flex-col items-center pt-4 '>
            <p className='font-kumbhSans text-[#F2F2F2] font-normal text-[20px]'><span className='font-semibold'>Mortified</span> is a Family.<br /></p>
            <p className='font-kumbhSans  text-[#F2F2F2] font-normal text-[20px] w-[911px]'>  We believe in connection, growth, and walking together on this journey of faith. Whether you have questions, need counsel, or simply wish to share your story, we’re here to listen and guide. Feel free to reach out to us via any of the channels below. Our team is ready to assist you with inquiries, prayer requests, or guidance on how to participate in Mortified events and departments. We’re more than an organization; we’re a family, united in purpose and love. Let’s stay connected as we advance God’s kingdom together.</p>
            <div className='flex flex-row gap-8 items-center pt-5 pb-7'>
            {socialIcons.map((icon, index) => <SocialIcon key={index} src={icon.src} alt={icon.alt} />)}
            </div>
            
        </div>
    </div>
  )
}
