import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "../User/User.css";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>Our users = {users.length}</h2>
      <p>Fantastic and vodro user</p>
      <div className="users">
        {" "}
        {/* Ensure this class is applied only once */}
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
