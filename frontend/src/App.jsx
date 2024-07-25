import React from "react";
import { DashBoard } from "./modules/dashboard/components/DashBoard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart } from "./modules/cart/Cart";

const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} /> 
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
    </Router>
  );
}
export default App;