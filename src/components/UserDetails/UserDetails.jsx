import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <p>
        Address: {user.address.street}, {user.address.city}
      </p>
    </div>
  );
};

export default UserDetails;
