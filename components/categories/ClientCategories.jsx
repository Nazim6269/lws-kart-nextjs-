"use client";

import { useCallback, useState } from "react";
import Search from "../search/Search";
import CategoryCard from "./CategoryCard";

const ClientCategories = ({ categorizedProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState(categorizedProducts);

  const handleSearch = useCallback(
    (searchTerm) => {
      const filtered = categorizedProducts.filter((item) =>
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    },
    [categorizedProducts]
  );

  return (
    <div className="container py-16">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 uppercase">
          shop by category
        </h2>
        <Search onSearch={handleSearch} />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {filteredProducts.map((product) => (
          <CategoryCard key={product?.productId} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ClientCategories;
