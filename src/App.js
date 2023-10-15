import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import CartMenu from "./components/CartMenu";
import Footer from "./components/Footer";
import ShoppingList from "./screens/ShopingList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <CartMenu />
      <ShoppingList />
      <Footer />
    </Router>
  );
}

export default App;
