'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const FilterByRange = () => {
  const searchParams= useSearchParams();
  
  const router= useRouter()
  const [range,setRange]=useState({})
  const handleChange=  (e)=>{
    const name=e.target.name;

   const price=e.target.value
   const params = new URLSearchParams(searchParams)

if(name === "min"){
  params.set("min",price)
}
if(name === "max"){
params.set('max',price)
}
   
   
   router.replace(`?${params.toString()}`)
   
  }
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
          onChange={handleChange}
        />
        <span className="mx-3 text-gray-500">-</span>
        <input
          type="number"
          name="max"
          id="max"
          className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
          placeholder="max" onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FilterByRange;
