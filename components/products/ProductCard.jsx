import Image from "next/image";
import Link from "next/link";
import WhisListIcon from "../whishlist/WhisListIcon";
import AddToCartBtn from "./addToCartBtn/AddToCartBtn";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <Image
          src={product?.images[0]}
          width={240}
          height={160}
          alt={product?.name}
          className="w-full"
        />

        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
      justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <Link
            href={`/products/details/${product?.productId}`}
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          {/* whisList icon */}
          <WhisListIcon productId={product?.productId} />
        </div>
      </div>

      <div className="pt-4 pb-3 px-4">
        <Link href={`/products/details/${product?.productId}`}>
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {`${product?.name.substring(0, 17)}...`}
          </h4>
        </Link>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">
            ${product?.discountPrice}
          </p>
          <p className="text-sm text-gray-400 line-through">
            ${product?.regularPrice}
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
          <div className="text-xs text-gray-500 ml-3">
            {product?.averageRating}
          </div>
        </div>
      </div>
      <AddToCartBtn productId={product?.productId} />
    </div>
  );
};

export default ProductCard;
