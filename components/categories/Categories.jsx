import Image from 'next/image';
import React from 'react';
import catOne from '@/public/category/category-1.jpg';
import catTwo from '@/public/category/category-2.jpg';
import catThree from '@/public/category/category-3.jpg';
import catFour from '@/public/category/category-4.jpg';
import catFive from '@/public/category/category-5.jpg';
import catSix from '@/public/category/category-6.jpg';
import Link from 'next/link';

const Categories = () => {
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        <div className="relative rounded-sm overflow-hidden group">
          <Image src={catOne} alt="category 1" className="w-full" />
          <Link
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Bedroom
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image src={catTwo} alt="category 2" className="w-full" />
          <Link
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Mattrass
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image src={catThree} alt="category 3" className="w-full" />
          <Link
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Outdoor
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image src={catFour} alt="category 4" className="w-full" />
          <Link
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Sofa
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image src={catFive} alt="category 5" className="w-full" />
          <Link
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Living Room
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image src={catSix} alt="category 6" className="w-full" />
          <Link
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Kitchen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
