import Image from 'next/image';

const Images = ({ images }) => {
  return (
    <div>
      <Image
        src={images?.[0]}
        width={160}
        height={100}
        alt="product1"
        className="w-full"
      />
      <div className="grid grid-cols-5 gap-4 mt-4">
        <Image
          src={images?.[1]}
          width={70}
          height={50}
          alt="product2"
          className="w-full cursor-pointer border border-primary"
        />
        <Image
          src={images?.[2]}
          width={70}
          height={50}
          alt="product3"
          className="w-full cursor-pointer border"
        />
        <Image
          src={images?.[3]}
          width={70}
          height={50}
          alt="product4"
          className="w-full cursor-pointer border"
        />
      </div>
    </div>
  );
};

export default Images;
