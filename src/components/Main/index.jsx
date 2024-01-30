import React from 'react';
import Home from '../../pages/home';
import ProductSpecific from '../../pages/productSpecific';
import Contact from '../../pages/contact';
import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/product/:id" element={<ProductSpecific />} />
                <Route exact path="/contact" element={<Contact />}></Route>
                {/* <Route exact path="/products" element={<Products/>}></Route> */}
        </Routes>

    </div>
  )
}

export default Main;