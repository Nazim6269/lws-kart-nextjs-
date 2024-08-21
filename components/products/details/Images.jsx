import Image from 'next/image';
import SingleImage from './SingleImage';

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
        {images?.map((image, index) => (
          <SingleImage key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Images;
