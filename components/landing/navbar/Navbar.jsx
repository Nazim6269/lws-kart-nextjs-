import { auth } from "@/auth";
import Logout from "@/components/pages/auth/Logout";
import bed2 from "@/public/icons/bed-2.svg";
import bed from "@/public/icons/bed.svg";
import office from "@/public/icons/office.svg";
import outdoor from "@/public/icons/outdoor-cafe.svg";
import sofa from "@/public/icons/sofa.svg";
import terrace from "@/public/icons/terrace.svg";
import Image from "next/image";
import Link from "next/link";
import HeaderLinks from "../header/HeaderLinks";

const Navbar = async () => {
  const session = await auth();

  return (
    <>
      <nav className="bg-gray-800">
        <div className="container flex">
          <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
            <span className="text-white">
              <i className="fa-solid fa-bars"></i>
            </span>
            <span className="capitalize ml-2 text-white hidden">
              All Categories
            </span>

            {/* <!-- dropdown --> */}
            <div
              className="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px]"
              style={{ width: "300px" }}
            >
              <Link
                aria-label="Go to login page"
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <Image
                  src={sofa}
                  alt="sofa"
                  className="w-5 h-5 object-contain"
                />{" "}
                <span className="ml-6 text-gray-600 text-sm">Sofa</span>
              </Link>
              <Link
                aria-label="Go to login page"
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <Image
                  src={terrace}
                  alt="terrace"
                  className="w-5 h-5 object-contain "
                />
                <span className="ml-6 text-gray-600 text-sm">Living Room</span>
              </Link>
              <Link
                aria-label="Go to login page"
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <Image src={bed} alt="bed" className="w-5 h-5 object-contain" />{" "}
                <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
              </Link>
              <Link
                aria-label="Go to login page"
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <Image
                  src={outdoor}
                  alt="Outdoor"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
              </Link>
              <Link
                aria-label="Go to login page"
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <Image
                  src={office}
                  alt="outdoor"
                  className="w-5 h-5 object-co "
                />
                <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
              </Link>
              <Link
                aria-label="Go to login page"
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <Image
                  src={bed2}
                  alt="Mattress"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Mattress</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
            {/*navbar left side */}
            <div className="flex items-center space-x-6 capitalize">
              <Link
                aria-label="Go to login page"
                href="/"
                className="text-gray-200 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                aria-label="Go to login page"
                href={`/shop?page=${1}`}
                className="text-gray-200 hover:text-white transition"
              >
                Shop
              </Link>
              <Link
                aria-label="Go to login page"
                href="#"
                className="text-gray-200 hover:text-white transition"
              >
                About us
              </Link>
              <Link
                aria-label="Go to login page"
                href="#"
                className="text-gray-200 hover:text-white transition"
              >
                Contact us
              </Link>
            </div>

            {/* navbar right side */}
            {session ? (
              <div className="flex justify-between items-center">
                <HeaderLinks name={session?.user?.name} />
                <Logout />
              </div>
            ) : (
              <>
                <Link
                  aria-label="Go to login page"
                  href="/login"
                  className="text-gray-200 hover:text-white transition"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
