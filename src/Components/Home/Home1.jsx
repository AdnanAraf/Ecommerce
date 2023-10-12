import React from "react";
// import Gallery from "../Navbar/Gallery/Gallery";
import ExtraSection from "../Navbar/ExtraSection/ExtraSection";
import Slider from "../Navbar/Background/Slider";
import Categories from "../Categories/Categories";

const Home1 = () => {
  return (
    <div>
      <Slider />
      {/* <Gallery /> */}
      <ExtraSection />
      <Categories />
    </div>
  );
};

export default Home1;
