"use client";

import Image from "next/image";
import { useState } from "react";
import SingleImage from "./SingleImage";

const Images = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (index) => {
    setIndex(index);
  };

  return (
    <div>
      <Image
        src={images?.[index]}
        width={160}
        height={100}
        alt="product1"
        className="w-full"
      />
      <div className="grid grid-cols-5 gap-4 mt-4">
        {images?.map((image, index) => (
          <SingleImage
            key={index}
            image={image}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
