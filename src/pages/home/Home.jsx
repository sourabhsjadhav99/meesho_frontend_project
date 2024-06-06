import React from "react";
import Cover from "./Cover";
import Categories from "./Categories";
import SortingProducts from "./SortingProducts";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div>
      <Cover />
      <Categories />
      <SortingProducts />
      <Footer />
    </div>
  );
}

export default Home;
