import React from "react";
import Cover from "./Cover";
import Categories from "./Categories";
import SortingProducts from "./SortingProducts";
import Footer from "../../components/Footer"
// import { useAuth } from '../signup/AuthContext';
import { useAuth } from "../../components/signup/AuthContext";



function Home() {
  const {focusonsearch} = useAuth(); 

  return (
    <div>
    
      <div className={focusonsearch?"hidden":""}><Cover /> <Categories /></div>
      
      <SortingProducts />
     
    </div>
  );
}

export default Home;
