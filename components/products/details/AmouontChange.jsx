"use client";

import { useState } from "react";

const AmouontChange = () => {
  const [amount, setAmount] = useState(1);
  return (
    <div className="mt-4">
      <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
      <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
        <button
          onClick={() => setAmount((prev) => prev - 1)}
          className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          disabled={amount === 1}
        >
          -
        </button>
        <div className="h-8 w-8 text-base flex items-center justify-center">
          {amount}
        </div>
        <button
          onClick={() => setAmount((prev) => prev + 1)}
          className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          disabled={amount === 6}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default AmouontChange;
