import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const loginHandle = async () => {
    console.log("email , password ", email, password);
    const data = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await data.json();
    console.log(result);
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Please enter correct details");
      setEmail("");
      setPassword("");
      let box = document.querySelector(".inputBox1");
      box.focus();
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <input
        type="text"
        className="inputBox inputBox1"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="inputBox"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => loginHandle()}>Log In</button>
    </div>
  );
};

export default Login;
