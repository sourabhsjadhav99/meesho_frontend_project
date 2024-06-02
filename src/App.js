import React from 'react';
import './index.css'; // Ensure this import is present
import Home from './pages/home/Home';
import SingleProduct from './pages/product/SingleProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>

       <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/:id" element={<SingleProduct/>} />

         </Routes>
         <Footer /> 

    </BrowserRouter>

  );
}

export default App;