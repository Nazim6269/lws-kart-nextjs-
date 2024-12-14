import WhishListCard from "./WhishListCard";
import WhisListIcon from "./WhisListIcon";
import { getAllProducts, getWhishList } from "@/database/queries/productsQuery";

const WhishList = async ({ productId }) => {
  const whishListProducts = await getWhishList();

  return (
    <div className="mx-auto space-y-4 max-w-6xl">
      <h1 className="text-xl font-semibold mb-4">Your Wishlist</h1>
      {whishListProducts.length > 0 ? (
        whishListProducts.map((product) => (
          <WhishListCard key={product.productId} product={product} />
        ))
      ) : (
        <p className="text-gray-500 text-center">No items in the wishlist.</p>
      )}
    </div>
  );
};

export default WhishList;
