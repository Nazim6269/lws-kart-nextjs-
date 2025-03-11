
import { getAllProducts } from "@/database/queries/productsQuery";
import { getCategory } from "@/utils/product";
import FilterCategory from "./FilterCategory";

const FilterByCategories =async () => {
  const products=await getAllProducts(20)
  const categoryArray = getCategory(products);

  return (
    <div>
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
        Categories
      </h3>
      <div className="space-y-2">
        {categoryArray?.map((item) => (
          <FilterCategory key={item?.productId} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FilterByCategories;
