import React from "react";
import Cover from "./Cover"; // Importing the Cover component
import Categories from "./Categories"; // Importing the Categories component
import SortingProducts from "./SortingProducts"; // Importing the SortingProducts component

import { useAuth } from "../../components/signup/AuthContext"; // Importing the useAuth hook from AuthContext

import Footer from "../../components/Footer"; // Importing the Footer component

function Home() {
  // Using the useAuth hook from AuthContext
  const { isLoggedIn,focusonsearch } = useAuth();

  // JSX content for rendering the Home page
  return (
    <div>
    
      <div style={{zIndex:"-200"}} className={focusonsearch?"hidden":""}><Cover /> <Categories /></div>
      
    <div className="flex flex-col gap-10">
      {/* <Navbar/> */}
      {/* <Cover />
      <Categories /> */}
      <SortingProducts />
      {/* <Footer /> */}
    </div>
    </div>
  );
}

export default Home;
