import React from 'react';
import Home from '../../pages/home';
import ProductSpecific from '../../pages/productSpecific';
import Contact from '../../pages/contact';
import CheckoutPage from '../../pages/checkout';
import { Routes, Route } from "react-router-dom";
import CheckoutSuccess from '../../pages/checkoutSuccess';

function Main() {
  return (
    <div>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/product/:id" element={<ProductSpecific />} />
                <Route exact path="/contact" element={<Contact />}></Route>
                <Route exact path="/checkout" element={<CheckoutPage />}></Route>
                <Route exact path="/checkoutSuccess" element={<CheckoutSuccess />}></Route>
              
        </Routes>

    </div>
  )
}

export default Main;  