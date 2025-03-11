import Breadcrubms from "@/components/breadcrumbs/Breadcrubms";
import DeleteCategoriesFromURL from "@/components/filter/DeleteCategoriesFromURL";
import FilterCard from "@/components/filter/FilterCard";
import Pagination from "@/components/pagination/Pagination";
import ProductCard from "@/components/products/ProductCard";

const ShopPage = async ({ searchParams }) => {
  const categories = searchParams.categories
    ? searchParams.categories.split(",")
    : [];
  const min = searchParams.min || 0;
  const max = searchParams.max || 100000;
  const page = searchParams.page || 1;

  let data = [];
  try {
    const res = await fetch(
      `http://localhost:3000/api/products?categories=${categories}&page=${page}&min=${min}&max=${max}&limit=${5}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const { products } = await res.json();
    data = products;
  } catch (error) {
    console.error("Fetch error:", error.message);
  }

  return (
    <>
      {/* this component will delete category params when page refresh */}
      <DeleteCategoriesFromURL />
      <Breadcrubms />

      <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        <div className="text-center md:hidden">
          <button
            className="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block md:hidden"
            type="button"
            data-drawer-target="drawer-example"
            data-drawer-show="drawer-example"
            aria-controls="drawer-example"
          >
            <ion-icon name="grid-outline"></ion-icon>
          </button>
        </div>

        {/* filtering card */}
        <FilterCard />

        {/* products list */}
        <div className="col-span-3">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
            {data?.length > 0 ? (
              data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
          <Pagination length={data.length || 0} />
        </div>
      </div>
    </>
  );
};

export default ShopPage;
