import {
  getNewArrivalProducts,
  getProductsByCategory,
} from '@/database/queries/productsQuery';
import ProductCard from '../products/ProductCard';

const NewArrival = async ({ fromDetails, category, id }) => {
  const newArrivalData = await getNewArrivalProducts();
  const categoryData = await getProductsByCategory(category);
  const filteredData = categoryData.filter(
    (product) => product?.pruductId !== id,
  );

  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-bold text-gray-800 uppercase mb-6">
        {fromDetails ? 'related products' : 'top new arrival'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {fromDetails ? (
          <>
            {filteredData?.map((product) => (
              <ProductCard key={product?.productId} product={product} />
            ))}
          </>
        ) : (
          <>
            {newArrivalData?.map((product) => (
              <ProductCard key={product?.productId} product={product} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default NewArrival;
