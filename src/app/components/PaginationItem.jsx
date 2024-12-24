import React from 'react';

export default function PaginationItem({ number, isActive, onClick }) {
  const baseClasses = "flex items-center justify-center px-4 font- py-2 w-[30px] rounded-lg border-2 cursor-pointer items-center text-center";
  const activeClasses = isActive ? "bg-[#333] text-white border-transparent" : "border-[#333]";

  return (
    <div
      className={`${baseClasses} ${activeClasses}`}
      onClick={onClick}
    >
      {number}
    </div>
  );
}
