"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Pagination = ({ length }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page")) || 1
  );
  const itemsPerPage = Math.ceil(length / 4);
  const totalPages = Math.ceil(length / itemsPerPage);

  // this function will update searchParams
  const updateSearchParams = (index) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", index.toString());
    router.push(`/shop?${params.toString()}`);
  };

  // this button will handle previous button
  const handlePrevBtn = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      updateSearchParams(prevPage);
    }
  };

  //this buttion will  handle next button
  const handleNextBtn = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      updateSearchParams(nextPage);
    }
  };
  const handleClick = (pageIndex) => {
    setCurrentPage(pageIndex);
    updateSearchParams(pageIndex);
  };

  return (
    <div className="flex justify-center mt-4">
      <ul className="flex space-x-2">
        {/* Previous Button */}
        <li>
          <button
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-400 text-gray-700 rounded-lg hover:bg-gray-400 disabled:bg-gray-200"
            onClick={handlePrevBtn}
          >
            &laquo; Prev
          </button>
        </li>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index}>
            <button
              onClick={() => handleClick(index + 1)}
              className="px-4 py-2 bg-primary text-blace rounded-lg hover:bg-primary"
            >
              {index + 1}
            </button>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <button
            onClick={handleNextBtn}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-400 text-gray-700 rounded-lg hover:bg-gray-400 disabled:bg-gray-200"
          >
            Next &raquo;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
