import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import styles from "./RegisterClient.module.css";

export default function RegisterClient() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [registrationDateTime, setRegistrationDateTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !registrationDateTime) {
      window.alert("Please fill in all fields");
      return;
    }

    const newClient = {
      firstName,
      lastName,
      email,
      registrationDateTime,
    };

    axios
      .post("http://localhost:4000/api/clients", newClient)
      .then((response) => {
        console.log(response);
        setIsSubmitted(true);
      })
      .catch((error) => console.log(error.message));
  };

  if (isSubmitted) {
    return (
      <div className={styles.mainContainer}>
        <Navbar />
        <div className={styles.registerSuccessMessage}>
          <h1>Client registered successfully!</h1>
          <Link to="/clients" className={styles.link}>
            View clients list
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <h1>Register a new client</h1>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <label>
          First name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Last name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Registration date and time:
          <input
            type="datetime-local"
            value={registrationDateTime}
            onChange={(e) => setRegistrationDateTime(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>
    </div>
  );
}
