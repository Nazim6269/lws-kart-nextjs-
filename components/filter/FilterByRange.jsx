"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const FilterByRange = () => {
  const searchParams = useSearchParams();

  const router = useRouter();
  const [range, setRange] = useState({ min: 0, max: 1000000 });

  // handle change function
  const handleChange = (e) => {
    let name = e.target.name;
    const price = e.target.value;
    setRange((prev) => ({ ...prev, [name]: price }));
  };

  //handle blur function
  const handleBlur = () => {
    const params = new URLSearchParams(searchParams);

    if (range.min) {
      params.set("min", range.min);
    } else {
      params.delete("min");
    }
    if (range.max) {
      params.set("max", range.max);
    } else {
      params.delete("max");
    }

    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="pt-4">
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
        Price
      </h3>
      <div className="mt-4 flex items-center">
        <input
          type="number"
          name="min"
          id="min"
          className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
          placeholder="min"
          value={range.min}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <span className="mx-3 text-gray-500">-</span>
        <input
          type="number"
          name="max"
          id="max"
          value={range.max}
          className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
          placeholder="max"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default FilterByRange;
