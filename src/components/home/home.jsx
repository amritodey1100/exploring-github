import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header.jsx"; // Correct the import path
import Footer from "../footer/Footer.jsx";

const Home = () => (
  <div>
    <Header />
    <Outlet />
    <Footer></Footer>
  </div>
);

export default Home;
