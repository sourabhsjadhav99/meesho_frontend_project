import React from 'react';
import './index.css'; // Ensure this import is present
import Home from './pages/home/Home';
import SingleProduct from './pages/product/SingleProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/signup/signup';
import Footer from './components/Footer';
import Navbar from './components/Header/Header';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
       <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/signup" element={<Signup />} />
             <Route path="/:id" element={<SingleProduct/>} />

         </Routes>
         <Footer /> 

    </BrowserRouter>

  );
}

export default App;