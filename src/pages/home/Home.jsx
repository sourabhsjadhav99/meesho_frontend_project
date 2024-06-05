import React from "react";
import Cover from "./Cover";
import Categories from "./Categories";
import SortingProducts from "./SortingProducts";
import Footer from "../../components/Footer"


function Home() {
  return (
    <div className="">
    
      <Cover />
      <Categories />
      <SortingProducts />
     
    </div>
  );
}

export default Home;
