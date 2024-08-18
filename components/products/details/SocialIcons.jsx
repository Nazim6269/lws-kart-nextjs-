import React from 'react';

const SocialIcons = () => {
  return (
    <div className="flex gap-3 mt-4">
      <a
        href="#"
        className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
      >
        <i className="fa-brands fa-facebook-f"></i>
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
