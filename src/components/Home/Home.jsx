import React from "react";
import LatestProducts from "../latestProducts/LatestProducts";
import Banner from "../Banner/Banner";
import Extra from "../extraSection/Extra";
import AgroNews from "../AgroNews/AgroNews";
import FeaturedCrops from "../AgroNews/FeaturedCrops";
import FarmerSupport from "../AgroNews/FarmerSupport";

const latestProductPromise = fetch(
  "https://3d-models-server-coral.vercel.app/latest-products"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <div className="mr-5 ml-5 mt-7">
        <Banner></Banner>
      </div>
      <div className="text-center text-4xl font-bold mt-8 mb-6">
        Recent <span className="text-amber-400">Products</span>
      </div>
      <LatestProducts
        latestProductPromise={latestProductPromise}
      ></LatestProducts>
      <Extra></Extra>
      <AgroNews></AgroNews>
      <FeaturedCrops></FeaturedCrops>
      <FarmerSupport></FarmerSupport>
    </div>
  );
};

export default Home;
