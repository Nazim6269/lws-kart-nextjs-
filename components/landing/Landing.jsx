import Ads from '../Ad/Ads';
import Categories from '../categories/Categories';
import Copyright from '../footer/Copyright';
import Footer from '../footer/Footer';
import NewArrival from '../newArrival/NewArrival';
import ProductList from '../products/ProductList';
import Features from './features/Features';
import Header from './header/Header';
import Hero from './hero/Hero';

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Categories />
      <NewArrival />
      <Ads />
      <ProductList />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Landing;
