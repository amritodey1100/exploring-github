import React from "react";
import "./User.css";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>email: {email}</p>
      <p>phone : {phone}</p>
    </div>
  );
};

export default User;
