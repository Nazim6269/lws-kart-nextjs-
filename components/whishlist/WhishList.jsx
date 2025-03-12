import { getWhishList } from "@/database/queries/productsQuery";
import ListCard from "./WhishListCard";

const WhishList = async ({ productId }) => {
  const whishListProducts = await getWhishList();

  return (
    <div className="mx-auto space-y-4 max-w-6xl">
      <h1 className="text-xl font-semibold mb-4">Your Wishlist</h1>
      {whishListProducts.length > 0 ? (
        whishListProducts.map((product) => (
          <ListCard key={product.productId} product={product} cart={false} />
        ))
      ) : (
        <p className="text-gray-500 text-center">No items in the wishlist.</p>
      )}
    </div>
  );
};

export default WhishList;
