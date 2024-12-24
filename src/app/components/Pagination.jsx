"use client"

import React, { useState } from 'react';
import PaginationItem from './PaginationItem';

export default function Pagination({ totalPages }) {
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <div className="flex gap-2  font-kumbhSans items-center justify-center ">

      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        return (
          <PaginationItem
            key={pageNumber}
            number={pageNumber}
            isActive={pageNumber === activePage}
            onClick={() => handlePageClick(pageNumber)}
          />
        );
      })}
    </div>
  );
}
