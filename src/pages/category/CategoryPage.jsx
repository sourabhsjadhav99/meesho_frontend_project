import React from "react";
import Navbar from "../../components/Header/Header"; // Importing Navbar component
import SortingProducts from "../home/SortingProducts"; // Importing SortingProducts component
import Footer from "../../components/Footer"; // Importing Footer component

// CategoryPage component to display products based on categories
function CategoryPage() {
  return (
    <div className="">
      <Navbar /> {/* Rendering Navbar component */}
      <SortingProducts isCategory={true} /> {/* Rendering SortingProducts component with isCategory prop */}
      <Footer /> {/* Rendering Footer component */}
    </div>
  );
}

export default CategoryPage; // Exporting CategoryPage component
