import React from "react";
import "./User.css";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>email: {email}</p>
      <p>phone : {phone}</p>
      <Link to={`/user/${id}`}>View Details</Link>
    </div>
  );
};

export default User;
