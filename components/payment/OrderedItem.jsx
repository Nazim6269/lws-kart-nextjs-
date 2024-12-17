import { useState } from "react";
import AmouontChange from "../products/details/AmouontChange";

const OrderedItem = ({ orderedProduct }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h5 className="text-gray-800 font-medium">{orderedProduct?.name}</h5>
        <p className="text-sm text-gray-600">Size: M</p>
      </div>
      <div className="flex items-center space-x-2">
        <AmouontChange />
      </div>
      <p className="text-gray-800 font-medium">
        ${orderedProduct?.regularPrice}
      </p>
    </div>
  );
};

export default OrderedItem;
