import Breadcrubms from '@/components/breadcrumbs/Breadcrubms';
import NewArrival from '@/components/newArrival/NewArrival';
import ProductDetails from '@/components/products/ProductDetails';

const ProductDetailsPage = () => {
  return (
    <div>
      <Breadcrubms />
      <ProductDetails />
      <NewArrival />
    </div>
  );
};

export default ProductDetailsPage;
