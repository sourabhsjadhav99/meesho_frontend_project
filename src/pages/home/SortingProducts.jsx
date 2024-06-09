import React from "react";
import Filter from "./Filter"; // Importing the Filter component
import ProductList from "../../components/ProductList"; // Importing the ProductList component

function SortingProducts({ isCategory }) {
  // Rendering the SortingProducts component
  return (
    <div className="w-[100%]  flex flex-col items-center p-2">
      <div className="w-[100%] md:w-[90%] ">
        {/* Title for the section */}
        <h1 className="text-3xl mb-6">Products for You</h1>
        
        {/* Container for Filter and ProductList components */}
        <div className="w-full flex flex-col md:flex-row gap-8 ">
          {/* Filter component */}
          <div>
            <Filter isCategory={isCategory} />
          </div>
          
          {/* ProductList component */}
          <div>
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortingProducts;
