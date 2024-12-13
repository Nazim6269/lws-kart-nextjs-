"use client";

import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  // Trigger onSearch only when debouncedSearch updates
  useEffect(() => {
    if (debouncedSearch.trim() !== "") {
      onSearch(debouncedSearch);
    }
  }, [debouncedSearch, onSearch]);

  return (
    <div className="w-full max-w-xl relative flex">
      <span className="absolute left-4 top-3 text-lg text-gray-400">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <input
        type="text"
        name="search"
        id="search"
        className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
        placeholder="search"
        onChange={handleChange}
      />
      <button className="bg-primary border border-primary flex items-center text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition  md:flex">
        Search
      </button>
    </div>
  );
};

export default Search;
