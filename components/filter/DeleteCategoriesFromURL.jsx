'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const DeleteCategoriesFromURL = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
  
    useEffect(() => {
      const currentParams = new URLSearchParams(searchParams);
  
      if (currentParams.has("categories")) {
        currentParams.delete("categories");
        router.replace(`?${currentParams.toString()}`, { scroll: false });
      }

      
    }, [router]);
  
    return null;
}

export default DeleteCategoriesFromURL