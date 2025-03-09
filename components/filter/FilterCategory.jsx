"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const FilterCategory = ({ item }) => {
  const [checked, setChecked] = useState(false);
  const searchParams= useSearchParams()
  const router= useRouter()


  const handleChange = (e) => {
    const isChecked= e.target.checked
    setChecked(isChecked)
    

    const currentCategories= searchParams.get("categories") ? searchParams.get("categories").split(",") : []
   

    const updatedCategories= isChecked? [...currentCategories,item.category]:currentCategories?.filter(cat => cat !== item.category)
    
    
    const params= new URLSearchParams(searchParams)

    if(updatedCategories.length >0){
      params.set("categories",updatedCategories.join(","))
    }else{
      params.delete("categories")
    }

    router.push(`?${params.toString()}`);
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
