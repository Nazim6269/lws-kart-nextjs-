import { getAllProducts } from "@/database/queries/productsQuery";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const products = await getAllProducts();

  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-bold text-gray-800 uppercase mb-6">
        Trending Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products?.map((product) => {
          if (product?.averageRating >= 6) {
            return <ProductCard key={product?.productId} product={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default ProductList;
