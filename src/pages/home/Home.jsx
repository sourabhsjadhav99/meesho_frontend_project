import React from "react";
import Cover from "./Cover";
import Categories from "./Categories";
import SortingProducts from "./SortingProducts";
// import Footer from "../../components/Footer"
// import { useAuth } from '../signup/AuthContext';
import { useAuth } from "../../components/signup/AuthContext";


// import Footer from "../../components/Footer";
import Footer from "../../components/Footer";
// import Navbar from "../../components/Header/Header";

function Home() {
  const {focusonsearch} = useAuth(); 

  return (
    <div>
    
      <div className={focusonsearch?"hidden":""}><Cover /> <Categories /></div>
      
    <div className="flex flex-col gap-10">
      {/* <Navbar/> */}
      <Cover />
      <Categories />
      <SortingProducts />
      <Footer />
    </div>
    </div>
  );
}

export default Home;
