import Link from "next/link";
import OrderedItem from "./OrderedItem";
import { getCartList } from "@/database/queries/productsQuery";

const OrderSummary = async () => {
  const cartItems = await getCartList();

  return (
    <>
      <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
        order summary
      </h4>
      <div className="space-y-2">
        {cartItems?.map((item) => (
          <OrderedItem key={item?.productId} orderedProduct={item} />
        ))}
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>subtotal</p>
        <p>$1280</p>
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>shipping</p>
        <p>Free</p>
      </div>

      <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
        <p className="font-semibold">Total</p>
        <p>$1280</p>
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
        href="#"
        className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
      >
        Place order
      </Link>
    </>
  );
};

export default OrderSummary;
