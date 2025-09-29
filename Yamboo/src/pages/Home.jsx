import React from "react";
import HomeSlider from "../components/HomeSlider";
import Banners from "../components/Banners";
import NewProducts from "../components/NewProducts";
import HomeAdd from "../components/HomeAdd";
import CustomerReviews from "../components/CustomerReviews";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <Banners />
      <div id="products">
        <NewProducts />
      </div>
      <HomeAdd />
      <CustomerReviews />
    </div>
  );
};

export default Home;
