import { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  const [users, setUser] = useState([]);
  //   console.log(user);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Users;
