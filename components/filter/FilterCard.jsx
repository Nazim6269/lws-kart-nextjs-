import FilterByCategories from "./FilterByCategories";
import FilterByRange from "./FilterByRange";
import FilterBySize from "./FilterBySize";

const FilterCard = () => {
  return (
    <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden hidden md:block">
      <div className="divide-y divide-gray-200 space-y-5">
        <FilterByCategories />
        <FilterByRange />
        <FilterBySize />
      </div>
    </div>
  );
};

export default FilterCard;
