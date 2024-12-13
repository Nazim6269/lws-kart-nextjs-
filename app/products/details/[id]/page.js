import Breadcrubms from "@/components/breadcrumbs/Breadcrubms";
import NewArrival from "@/components/newArrival/NewArrival";
import ProductDetails from "@/components/products/ProductDetails";
import { getProductById } from "@/database/queries/productsQuery";

const ProductDetailsPage = async ({ params: { id } }) => {
  const singleProduct = await getProductById(id);

  return (
    <div>
      <Breadcrubms />
      <ProductDetails product={singleProduct} />
      <NewArrival
        fromDetails={true}
        category={singleProduct?.category}
        id={id}
      />
    </div>
  );
};

export default ProductDetailsPage;
