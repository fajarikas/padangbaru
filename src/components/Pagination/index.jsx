import React, { useEffect, useState } from "react";
import { fetchData } from "../../helpers/fetch";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export default function Pagination({
  currentPage,
  lastPage,
  onPrevious,
  onNext,
}) {
  return (
    <div className=" flex justify-center items-center space-x-4 ">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded ${
          currentPage === 1
            ? "bg-gray-300"
            : "bg-added-green text-white hover:bg-green-600"
        }`}
      >
        <IoMdArrowDropleft />
      </button>
      <span>
        Halaman {currentPage} dari {lastPage}
      </span>
      <button
        onClick={onNext}
        disabled={currentPage === lastPage}
        className={`px-4 py-2 rounded ${
          currentPage === lastPage
            ? "bg-gray-300"
            : "bg-added-green text-white hover:bg-green-600"
        }`}
      >
        <IoMdArrowDropright />
      </button>
    </div>
  );
}
