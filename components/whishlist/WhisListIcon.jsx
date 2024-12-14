"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const WhisListIcon = ({ productId }) => {
  const handleClick = (e) => {};
  return (
    <button
      href="#"
      className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
      title="add to wishlist"
      onClick={(e) => handleClick(e)}
    >
      <i className="fa-solid fa-heart"></i>
    </button>
  );
};

export default WhisListIcon;
