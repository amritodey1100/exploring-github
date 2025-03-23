import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <nav>
      <span>My Website</span>
      <Link to="/">Home</Link>
      <Link to="/user">Users</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </div>
);

export default Header;
