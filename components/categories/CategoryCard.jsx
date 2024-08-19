import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryCard = ({ product }) => {
  return (
    <div className="relative rounded-sm overflow-hidden group">
      <Image
        src={product?.images[0]}
        width={320}
        height={240}
        alt={product?.category}
        className="w-full"
      />
      <Link
        href="#"
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
      >
        {product?.category}
      </Link>
    </div>
  );
};

export default CategoryCard;
