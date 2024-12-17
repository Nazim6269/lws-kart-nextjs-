import Image from "next/image";
import Link from "next/link";
import offer from "@/public/offer.jpg";

const Ads = () => {
  return (
    <div className="container pb-16">
      <Link aria-label="Go to login page" href="#">
        <Image src={offer} alt="ads" className="w-full" />
      </Link>
    </div>
  );
};

export default Ads;
