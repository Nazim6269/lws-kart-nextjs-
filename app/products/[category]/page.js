import ProductCard from '@/components/products/ProductCard';
import { getProductsByCategory } from '@/database/queries/productsQuery';

const CategoryPage = async ({ params: { category } }) => {
  const decodedCategory = decodeURI(category);
  const categorizedProducts = await getProductsByCategory(decodedCategory);

  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-bold text-gray-800 uppercase my-6">
        {decodedCategory}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {categorizedProducts?.map((product) => (
          <ProductCard key={product?.proudctId} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
