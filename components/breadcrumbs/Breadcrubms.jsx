"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrubms = () => {
  const pathName = usePathname();
  const breadcrumbs = pathName.split("/").filter((path) => path);
  return (
    <div className="container py-4 flex items-center gap-3">
      <Link
        aria-label="Go to login page"
        href="/"
        className="text-primary text-base"
      >
        <i className="fa-solid fa-house"></i>
      </Link>
      {breadcrumbs?.map((item) => (
        <div key={item} className="flex gap-2 justify-center items-center">
          <span className="text-sm text-gray-400">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <Link
            aria-label="Go to login page"
            href={`/${item}`}
            className="text-gray-600 font-medium"
          >
            {item}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Breadcrubms;
