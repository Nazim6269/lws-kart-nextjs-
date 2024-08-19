import { getNewArrivalProducts } from '@/database/queries/productsQuery';
import ProductCard from '../products/ProductCard';

const NewArrival = async () => {
  const newArrivalData = await getNewArrivalProducts();
  console.log(newArrivalData);
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-bold text-gray-800 uppercase mb-6">
        top new arrival
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {newArrivalData?.map((product) => (
          <ProductCard key={product?.productId} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
