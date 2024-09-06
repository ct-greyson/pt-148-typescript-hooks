import React, { useState } from "react";

// User Interface
// name (string), email (string)

interface User {
  name: string;
  email: string;
}

const UserComponent = () => {
  // setting our user to null by default
  // so we have to type it as such
  // <User | null> says that our type can either be a User object or a null value
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = () => {
    // create a newUser object
    const newUser: User = {
      name: "Dillon",
      email: "dillon@codingtemple.com",
    };

    //update our user state
    setUser(newUser);
  };

  const handleLogout = () => {
    setUser(null)
  };

  return (
    <>
      <h1>User Login: </h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* display our user name and email */}
    {/* Optional Chaining 
        Adding a ? to the end of our object will allow us to check if the object is null or not before trying to display its data    
    */}
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </>
  );
};

export default UserComponent;
