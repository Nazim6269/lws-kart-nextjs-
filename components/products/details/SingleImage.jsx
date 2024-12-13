import Image from "next/image";

const SingleImage = ({ image, onClick }) => {
  return (
    <Image
      src={image}
      width={70}
      height={50}
      alt="product2"
      className="w-full cursor-pointer border border-primary"
      onClick={onClick}
    />
  );
};

export default SingleImage;
