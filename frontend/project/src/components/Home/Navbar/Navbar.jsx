import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [signOutSuccess, setSignOutSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
    setSignOutSuccess(true);
    window.alert("Sign out successful!");
  };

  return (
    <div className={styles.navbar}>
      <Link to="/">HOME</Link>
      <div>YOUR BEAUTY SALON</div>
      {!localStorage.getItem("isLoggedIn") && <Link to="/login">Login</Link>}
      {localStorage.getItem("isLoggedIn") && <Link to="/clients">Clients</Link>}
      {localStorage.getItem("isLoggedIn") && <button onClick={handleSignOut}>Sign Out</button>}
    </div>
  );
}
