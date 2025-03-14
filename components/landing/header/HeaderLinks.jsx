import Link from "next/link";

const HeaderLinks = ({ name }) => {
  return (
    <div className="flex items-center space-x-4">
      <Link
        aria-label="Go to login page"
        href="/whishlist"
        className="text-center text-white hover:text-primary transition relative"
      >
        <div className="text-2xl">
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className="text-xs leading-3">Wishlist</div>
        <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          8
        </div>
      </Link>
      <Link
        aria-label="Go to login page"
        href="/cart"
        className="text-center text-white hover:text-primary transition relative"
      >
        <div className="text-2xl">
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
        <div className="text-xs leading-3">Cart</div>
        <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          2
        </div>
      </Link>
      <Link
        aria-label="Go to login page"
        href="/account"
        className="text-center text-white hover:text-primary transition relative"
      >
        <div className="text-2xl">
          <i className="fa-regular fa-user"></i>
        </div>
        <div className="text-xs leading-3">{name || "Account"}</div>
      </Link>
    </div>
  );
};

export default HeaderLinks;
