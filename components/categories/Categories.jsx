import { getAllProducts } from "@/database/queries/productsQuery";
import { getCategory } from "@/utils/product";

import ClientCategories from "./ClientCategories";

const Categories = async () => {
  const products = await getAllProducts();
  const categorizedProducts = getCategory(products);

  return <ClientCategories categorizedProducts={categorizedProducts} />;
};

export default Categories;
