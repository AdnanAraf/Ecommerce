import React from "react";
// import Gallery from "../Navbar/Gallery/Gallery";
import ExtraSection from "../Navbar/ExtraSection/ExtraSection";
import Slider from "../Navbar/Background/Slider";
// import Categories from "../Categories/Categories";
import FeatureProduct from "../FeaturedProduct/FeatureProduct";
import Differentlogo from "../Differentlogo/Differentlogo";
import PopularProduct from "../Products/PopularProduct/PopularProduct";

const Home1 = () => {
  return (
    <div>
      <Slider />
      {/* <Gallery /> */}
      <ExtraSection />
      <FeatureProduct />
      <PopularProduct />
      <Differentlogo />
    </div>
  );
};

export default Home1;
