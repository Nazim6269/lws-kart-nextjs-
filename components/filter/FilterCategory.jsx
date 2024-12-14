"use client";

import { useState } from "react";

const FilterCategory = ({ item }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name={item?.category}
        id={`cat-${item?.productId}`} // Use a unique ID for accessibility
        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
        onChange={handleChange}
        checked={checked}
      />
      <label
        htmlFor={`cat-${item?.productId}`}
        className="text-gray-600 ml-3 cursor-pointer"
      >
        {item?.category}
      </label>
      <div className="ml-auto text-gray-600 text-sm">{`(${item?.productId})`}</div>
    </div>
  );
};

export default FilterCategory;
