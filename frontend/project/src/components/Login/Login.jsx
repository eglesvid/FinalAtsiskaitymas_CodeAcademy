import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Home/Navbar/Navbar";
import styles from "./Login.module.css";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", { username, password })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("isLoggedIn", "true");
          navigate("/clients");
          window.alert("Login successful!");
        } else {
          throw new Error("Invalid username or password");
        }
      })
      .catch((error) => {
        console.log(error);
        window.alert("Invalid username or password");
      });
  };

  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <h1 className={styles.loginTitle}>Login</h1>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <label className={styles.loginLabel}>
          Username:
          <input
            className={styles.loginInput}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
        </label>
        <br />
        <label className={styles.loginLabel}>
          Password:
          <input
            className={styles.loginInput}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </label>
        <br />
        <button className={styles.loginButton} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
