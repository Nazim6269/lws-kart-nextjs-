import methods from '@/public/methods.png';
import Image from 'next/image';

const Copyright = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container flex items-center justify-between">
        <p className="text-white">
          &copy; E-Commerce - All Right Reserved Nazimuddin
        </p>
        <div>
          <Image src={methods} alt="methods" className="h-5" />
        </div>
      </div>
    </div>
  );
};

export default Copyright;
