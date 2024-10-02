const User = ({ user }) => {
  console.log(user);
  return <div>
    <h2>User Name: {user.name}</h2>
    <h2>User Contact: {user.phone}</h2>
  </div>;
};

export default User;
