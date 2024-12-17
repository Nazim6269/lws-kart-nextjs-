import Link from "next/link";
import AddToCartBtn from "../addToCartBtn/AddToCartBtn";
import AddToWhishListBtn from "../addToWhishListButton/AddToWhishListBtn";

const ButtonGroups = ({ productId }) => {
  return (
    <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
      <AddToCartBtn productId={productId} />
      <AddToWhishListBtn />
    </div>
  );
};

export default ButtonGroups;
