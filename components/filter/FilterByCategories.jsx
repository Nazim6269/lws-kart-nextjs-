import { getAllProducts } from "@/database/queries/productsQuery";
import { getCategory } from "@/utils/product";

const FilterByCategories = async () => {
  const products = await getAllProducts();
  const categoryArray = getCategory(products);

  return (
    <div>
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
        Categories
      </h3>
      <div className="space-y-2">
        {categoryArray?.map((item) => (
          <div key={item?.productId} className="flex items-center">
            <input
              type="checkbox"
              name="cat-1"
              id="cat-1"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="cat-1"
              className="text-gray-600 ml-3 cusror-pointer"
            >
              {item?.category}
            </label>
            <div className="ml-auto text-gray-600 text-sm">{`(${item?.productId})`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterByCategories;
