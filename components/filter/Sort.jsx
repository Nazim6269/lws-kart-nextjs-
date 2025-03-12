"use client";

import { useRouter, useSearchParams } from "next/navigation";

const Sort = ({ options }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSelect = (e) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("sort", e.target.value);
    } else {
      params.delete("sort");
    }

    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort" className="text-sm font-medium text-gray-700">
        Sort by:
      </label>
      <select
        onChange={handleSelect}
        id="sort"
        className="p-2 text-sm border border-red-500 rounded-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
