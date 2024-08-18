import Image from 'next/image';
import Link from 'next/link';
import offer from '@/public/offer.jpg';

const Ads = () => {
  return (
    <div class="container pb-16">
      <Link href="#">
        <Image src={offer} alt="ads" class="w-full" />
      </Link>
    </div>
  );
};

export default Ads;
