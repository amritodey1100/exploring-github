import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header.jsx"; // Correct the import path

const Home = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

export default Home;
