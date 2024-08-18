import Image from 'next/image';
import React from 'react';
import productOne from '@/public/products/product1.jpg';

const Images = () => {
  return (
    <div>
      <Image src={productOne} alt="product1" className="w-full" />
      <div className="grid grid-cols-5 gap-4 mt-4">
        <Image
          src={productOne}
          alt="product2"
          className="w-full cursor-pointer border border-primary"
        />
        <Image
          src={productOne}
          alt="product3"
          className="w-full cursor-pointer border"
        />
        <Image
          src={productOne}
          alt="product4"
          className="w-full cursor-pointer border"
        />
        <Image
          src={productOne}
          alt="product5"
          className="w-full cursor-pointer border"
        />
        <Image
          src={productOne}
          alt="product6"
          className="w-full cursor-pointer border"
        />
      </div>
    </div>
  );
};

export default Images;
