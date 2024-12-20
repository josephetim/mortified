import * as React from "react";
import Image from "next/image";
import { icons } from "../assets/icons/icons";

// export interface ValueCardProps {
//     icon: string;
//     title: string;
//     description: string;
//   }


const values = [
  {
    icon: icons.cubes,
    title: "Christian Accountability",
    description: `Growing in faith means working together in
      truth and in love. Through Christian
      accountability, we support and challenge
      one another to live out our calling, hold each
      other to God's standards, and strengthen
      our commitment to Christ. Together,
      we build a community where grace and
      spiritual growth thrive.`
  },
  {
    icon: icons.mentor,
    title: "Mentorship",
    description: `Guided by faith, mentorship is a vital part of
      discipleship. By walking alongside one
      one another, we share wisdom, encouragement
      and spiritual guidance to grow deeper in our
      relationship with Christ. Through mentorship,
      we empower each other to live out our
      God-given purpose with confidence and grace`
  },
  {
    icon: icons.fellowship,
    title: "Fellowship",
    description: `In fellowship, we come together as a community
      of believers, united in Christ. Through shared
      experiences, prayer and support, we strengthen
      one another and grow in our faith. Fellowship
      allows us to build meaningful connections,
      encouraging each other to walk faithfully and
      live out the love of Christ in our daily lives.`
  }
];


export function ValueCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-start pt-[32px] pr-[65px] pb-[32px] pl-6 rounded-lg border border-solid bg-neutral-900 border-neutral-800 max-w-[480px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col">
        <div className="flex overflow-hidden flex-col self-start">
          <div className="flex overflow-hidden flex-col justify-center px-4 py-5 rounded-xl bg-zinc-800 w-[60px]">
            <Image
              loading="lazy"
              src={icon}
              alt={`${title} icon`}
              className="object-contain w-full h-full aspect-[1.2]"
            />
          </div>
          <div className=" font-kumbhSans text-[24px] font-normal mt-6 text-2xl text-white">
            {title}
          </div>
        </div>
        <div className="font-kumbhSans text-[15px] font-normal mt-3 text-base leading-6 text-stone-300">
          {description}
        </div>
      </div>
    </div>
  );
}

export function ValueCards () {
  return (
    <div className="flex-row justify-center align-middle flex flex-wrap gap-4 items-start mt-24 max-md:mt-10 max-md:max-w-full">
          {values.map((value, index) => (
            <ValueCard key={index}{...value} />
          ))}
        </div>
  )
}