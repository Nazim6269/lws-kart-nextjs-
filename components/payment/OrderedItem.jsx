"use client";

import { useState } from "react";

const OrderedItem = ({ orderedProduct }) => {
  const [amount, setAmount] = useState(1);
  return (
    <div className="flex justify-between items-center">
      <div>
        <h5 className="text-gray-800 font-medium">{orderedProduct?.name}</h5>
        <p className="text-sm text-gray-600">Size: M</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          aria-label="Decrease quantity"
          disabled={amount === 1}
          onClick={() => setAmount((prev) => prev - 1)}
        >
          -
        </button>
        <p className="text-gray-800 font-medium">{amount}</p>
        <button
          className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          aria-label="Increase quantity"
          disabled={amount === 5}
          onClick={() => setAmount((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <p className="text-gray-800 font-medium">
        ${orderedProduct?.regularPrice}
      </p>
    </div>
  );
};

export default OrderedItem;
