import Breadcrubms from "@/components/breadcrumbs/Breadcrubms";
import DeleteCategoriesFromURL from "@/components/filter/DeleteCategoriesFromURL";
import FilterCard from "@/components/filter/FilterCard";
import Sort from "@/components/filter/Sort";
import Pagination from "@/components/pagination/Pagination";
import ProductCard from "@/components/products/ProductCard";

const options = [
  { label: "Low to High", value: "asc" },
  { label: "High to Low", value: "dsc" },
  { label: "Newest Arrivals", value: "newest" },
  { label: "Best Sellers", value: "bestsellers" },
];

const ShopPage = async ({ searchParams }) => {
  const categories = (await searchParams.categories)
    ? searchParams.categories.split(",")
    : [];
  const min = (await searchParams.min) || 0;
  const max = (await searchParams.max) || 100000;
  const page = (await searchParams.page) || 1;
  const sortTerm = (await searchParams.sort) || "defalut";

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
    // sorting algorithm
    if (sortTerm === "asc") {
      data = data.sort((a, b) => a.discountPrice - b.discountPrice);
    } else if (sortTerm === "dsc") {
      data = data.sort((a, b) => b.discountPrice - a.discountPrice);
    }
  } catch (error) {
    console.error("Fetch error:", error.message);
  }

  return (
    <>
      {/* this component will delete category params when page refresh */}
      <DeleteCategoriesFromURL />
      <Breadcrubms />

      <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        {/* filtering card */}
        <FilterCard />

        {/* products list */}
        <div className="col-span-3">
          {/* Sorting component */}
          <div className="mb-3">
            <Sort options={options} />
          </div>

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
