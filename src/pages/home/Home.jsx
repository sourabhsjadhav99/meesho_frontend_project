import React from "react";
import Cover from "./Cover"; // Importing the Cover component
import Categories from "./Categories"; // Importing the Categories component
import SortingProducts from "./SortingProducts"; // Importing the SortingProducts component

import { useAuth } from "../../components/signup/AuthContext"; // Importing the useAuth hook from AuthContext

import Footer from "../../components/Footer"; // Importing the Footer component

function Home() {
  // Using the useAuth hook from AuthContext
  const { isLoggedIn } = useAuth();

  // JSX content for rendering the Home page
  return (
    <div>
      {/* Main content wrapper */}
      <div className="flex flex-col gap-5">
        {/* Cover component for displaying a cover image or banner */}
        <Cover />

        {/* Categories component for displaying product categories */}
        <Categories />

        {/* SortingProducts component for sorting and displaying products */}
        {/* Pass isCategory prop as false to indicate it's not a category page */}
        <SortingProducts isCategory={false} />

        {/* Footer component for displaying footer information */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
