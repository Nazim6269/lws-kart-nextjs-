import { getAllProducts } from '@/database/queries/productsQuery';
import catOne from '@/public/category/category-1.jpg';
import catTwo from '@/public/category/category-2.jpg';
import catThree from '@/public/category/category-3.jpg';
import catFour from '@/public/category/category-4.jpg';
import catFive from '@/public/category/category-5.jpg';
import catSix from '@/public/category/category-6.jpg';
import { getProductsByCategory } from '@/utils/product';
import Image from 'next/image';
import Link from 'next/link';
import CategoryCard from './CategoryCard';

const Categories = async () => {
  const products = await getAllProducts();
  const categorizedProducts = getProductsByCategory(products);

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
