import React, { useState } from 'react';
import Accordion from './AccordionItem';
import { icons } from "../assets/icons/icons";

export const sermons = [
  {
    id: 1,
    title: "MORTIFIED SERMON",
    iconSrc: icons.download,
    download: true,
    edition: "2018",
    size: '20MB'
  },
  {
    id: 2,
    title: "MORTIFIED SERMON",
    iconSrc: icons.download,
    download: true,
    edition: "2018",
    size: '20MB'
  },
  {
    id: 3,
    title: "MORTIFIED SERMON",
    iconSrc: icons.download,
    download: true,
    edition: "2018",
    size: '20MB'
  },
  {
    id: 4,
    title: "MORTIFIED SERMON",
    iconSrc: icons.download,
    download: true,
    edition: "2018",
    size: '20MB'
  },
  {
    id: 5,
    title: "MORTIFIED SERMON",
    iconSrc: icons.download,
    download: true,
    edition: "2018",
    size: '20MB'
  },
  {
    id: 6,
    title: "MORTIFIED SERMON",
    iconSrc: icons.download,
    download: true,
    edition: "2018",
    size: '20MB'
  }
];

const sermonTopics = [
  "Christian Ministry", "Consecration", "Faith", "Growing in God", "Faith", "Love", "Knowing Jesus", "New Creation", "Prayer", "Seeking Direction", "Walking in the Spirit"
];

const Pill = ({ text, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex text-[12px] items-center px-4 py-1 border-[1px] border-[#333] text-white bg-[#202020] rounded-[24px] text-sm cursor-pointer ${
        isActive ? "font-bold" : "font-normal"
      }`}
    >
      {text}
    </div>
  );
};

export default function SermonContainer() {
  const [activePill, setActivePill] = useState(null);

  return (
    <div>
      <div className="flex flex-row gap-[16px] flex-wrap">
        {sermonTopics.map((sermonTopic, index) => (
          <Pill
            key={index}
            text={sermonTopic}
            isActive={activePill === index}
            onClick={() => setActivePill(index)}
          />
        ))}
      </div>
      <div className='mt-[50px]'>
        <Accordion items={sermons} />
      </div>
    </div>
  );
}
