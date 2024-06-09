import React from "react";
import Navbar from "../../components/Header/Header";
import SortingProducts from "../home/SortingProducts";
import Footer from "../../components/Footer";

function CategoryPage() {
  return (
    <div className="">
      <SortingProducts isCategory={true}/>
      <Footer />
    </div>
  );
}

export default CategoryPage;
