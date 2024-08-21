import { getAllProducts } from '@/database/queries/productsQuery';
import { getCategory } from '@/utils/product';
import CategoryCard from './CategoryCard';

const Categories = async () => {
  const products = await getAllProducts();
  const categorizedProducts = getCategory(products);

  return (
    <div className="container py-16">
      <h2 className="text-2xl font-bold text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {categorizedProducts?.map((product) => (
          <CategoryCard key={product?.productId} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
