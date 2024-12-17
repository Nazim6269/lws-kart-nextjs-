import Link from "next/link";
import React from "react";

const SocialIcons = () => {
  return (
    <div className="flex gap-3 mt-4">
      <Link
        aria-label="Go to login page"
        href="#"
        className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
      >
        <i className="fa-brands fa-facebook-f"></i>
      </Link>
      <Link
        aria-label="Go to login page"
        href="#"
        className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
      >
        <i className="fa-brands fa-twitter"></i>
      </Link>
      <Link
        aria-label="Go to login page"
        href="#"
        className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
      >
        <i className="fa-brands fa-instagram"></i>
      </Link>
    </div>
  );
};

export default SocialIcons;
