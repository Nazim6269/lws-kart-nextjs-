import Image from "next/image";
import AddToCartBtn from "../products/addToCartBtn/AddToCartBtn";

const ListCard = ({ product, cart }) => {
  return (
    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <Image
          src={product?.images[1]}
          width={70}
          height={40}
          alt="product 6"
          className="w-full"
        />
      </div>
      <div className="w-1/3">
        <h2 className="text-gray-800 text-xl font-medium uppercase">
          {product?.name}
        </h2>
        <p className="text-gray-500 text-sm">
          Availability:{" "}
          <span
            className={product?.inStock ? "text-green-600" : "text-red-600"}
          >
            {product?.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </p>
      </div>
      <div className="text-primary text-lg font-semibold">
        ${product?.regularPrice}
      </div>
      {!cart ? (
        <AddToCartBtn productId={product?.productId} whishList={true} />
      ) : (
        ""
      )}

      <div className="text-gray-600 cursor-pointer hover:text-primary">
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
};

export default ListCard;
