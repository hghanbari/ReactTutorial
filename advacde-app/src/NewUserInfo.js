import React, { useEffect, useState } from "react";

export default function NewUserInfo() {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(1);
  const userCheng = (e) => {
    setUserId(e.target.value);
  };
  useEffect(() => {
    console.log("userEffect runs");
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
    return () => {
      console.log("clean up");
    };
  }, [userId]);
  return (
    <div className="user">
      user Id:
      <input type="text" onChange={userCheng} value={userId} />
      <br />
      Name:{user.name}
      <br />
      Email: {user.email}
    </div>
  );
}
