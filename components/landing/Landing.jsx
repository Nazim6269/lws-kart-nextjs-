import Ads from "../Ad/Ads";
import Categories from "../categories/Categories";
import NewArrival from "../newArrival/NewArrival";
import ProductList from "../products/ProductList";
import Features from "./features/Features";
import Hero from "./hero/Hero";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Categories />
      <NewArrival fromDetails={false} />
      <Ads />
      <ProductList />
    </div>
  );
};

export default Landing;
