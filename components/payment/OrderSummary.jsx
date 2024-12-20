"use client";

import Link from "next/link";
import useSWR from "swr";
import OrderedItem from "./OrderedItem";

// SWR fetcher function
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const OrderSummary = () => {
  const { data, error } = useSWR("/auth/cart", fetcher);

  if (error) return <div>Failed to load cart items</div>;
  if (!data) return <div>Loading cart items...</div>;

  if (data.length === 0) {
    return <div>Your cart is empty</div>;
  }

  const subTotal = data.reduce((acc, cur) => {
    acc = acc + cur.regularPrice * cur.quantity;
    return acc;
  }, 0);

  return (
    <>
      <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
        order summary
      </h4>
      <div className="space-y-2">
        {data?.map((item) => (
          <OrderedItem key={item?.productId} orderedProduct={item} />
        ))}
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>subtotal</p>
        <p>${subTotal}</p>
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>shipping</p>
        <p>Free</p>
      </div>

      <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
        <p className="font-semibold">Total</p>
        <p>${subTotal}</p>
      </div>

      <div className="flex items-center mb-4 mt-2">
        <input
          type="checkbox"
          name="aggrement"
          id="aggrement"
          className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
        />
        <label
          htmlFor="aggrement"
          className="text-gray-600 ml-3 cursor-pointer text-sm"
        >
          I agree to the{" "}
          <Link href="#" className="text-primary">
            terms & conditions
          </Link>
        </label>
      </div>

      <Link
        aria-label="Go to login page"
        href="#"
        className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
      >
        Place order
      </Link>
    </>
  );
};

export default OrderSummary;
