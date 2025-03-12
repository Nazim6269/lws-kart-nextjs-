import Breadcrubms from "@/components/breadcrumbs/Breadcrubms";
import ListCard from "@/components/whishlist/WhishListCard";
import { getWhishList } from "@/database/queries/productsQuery";

const CartPage = async () => {
  const cartProducts = await getWhishList();
  return (
    <div>
      <Breadcrubms />
      <div className="container gap-6 pt-4 pb-16">
        <div className="mx-auto space-y-4 max-w-6xl">
          <h1 className="text-xl font-semibold mb-4">Your Cart items</h1>
          {cartProducts.length > 0 ? (
            cartProducts.map((product) => (
              <ListCard key={product.productId} product={product} cart={true} />
            ))
          ) : (
            <p className="text-gray-500 text-center">No items in the cart.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
