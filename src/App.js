import React, { useEffect,useRef } from 'react';
import './index.css'; // Ensure this import is present
import Home from './pages/home/Home';
import SingleProduct from './pages/product/SingleProduct';
import Signup from './components/signup/Signup';
import Footer from './components/Footer';
import CartPage from './pages/cart/CartPage';
import PaymentPage from './pages/payment/PaymentPage';
import Summary from './pages/cart/Summary';
import Navbar from './components/Header/Header';
import BuyNowPage from './pages/buyNow/BuyNowPage';
import CategoryPage from './pages/category/CategoryPage';
import { useAuth } from './components/signup/AuthContext';


// Importing necessary modules from react-router-dom
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

// ScrollToTop component to scroll to the top of the page on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
const usePreviousLocations = () => {
  const location = useLocation();
  const previousLocations = useRef([]);



  useEffect(() => {
    previousLocations.current.push(location);
    if (previousLocations.current.length > 2) {
      previousLocations.current.shift(); // Keep only the last 2 locations
    }
  }, [location]);

  return previousLocations.current;
};

const AppContent = () => {
  const location = useLocation();
  const { setcurrentroutes,currentroutes } = useAuth();

  const previousLocations = usePreviousLocations();
  setcurrentroutes(previousLocations[previousLocations.length-2]?.pathname )
  console.log("pp",previousLocations[previousLocations.length-2]?.pathname)
  console.log("cuurrr",currentroutes)

  const isCartPage = location.pathname === "/cart";
  const ispayment =location.pathname === "/payment";
  const issummary=location.pathname === "/summary"
  const isbuynow = location.pathname === "/buynow"
  console.log(location.pathname)

  return (
    <>
      {(!isCartPage && !ispayment && !issummary && !isbuynow ) && <Navbar />}
      <ScrollToTop />

      {/* Routes for different pages */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<SingleProduct />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/buynow" element={<BuyNowPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
      {!isCartPage && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
