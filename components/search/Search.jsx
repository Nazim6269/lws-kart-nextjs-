"use client";

import { useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value;

    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-xl relative flex">
      <span className="absolute left-4 top-3 text-lg text-gray-400">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          name="search"
          id="search"
          className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
          placeholder="search"
        />
        <button
          type="submit"
          className="bg-primary border border-primary flex items-center text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition  md:flex"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
