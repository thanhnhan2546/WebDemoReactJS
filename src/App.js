import logo from "./logo.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductLists from "./components/ProductLists";
import { NavLink, BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/UI/Header/Header";
import Carousel from "./components/UI/carousel/Carousel";
import Footer from "./components/UI/Footer/Footer";
import Details from "./pages/Detail/Details";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/Login/Login";
import {
  getProducts,
  ProductsReducers,
} from "./redux/reducers/ProductsReducers";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Carousel />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<ProductLists />} />
        <Route exact path="/detail/:id" element={<Details />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/logins" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
