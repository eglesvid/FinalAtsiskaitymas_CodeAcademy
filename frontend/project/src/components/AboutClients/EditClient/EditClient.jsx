import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import styles from "./EditClient.module.css";

export default function EditClient() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [registrationDateTime, setRegistrationDateTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { clientId } = useParams();
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/clients/${clientId}`)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setRegistrationDateTime(
          new Date(response.data.registrationDateTime).toISOString().slice(0, 16)
        );
      })
      .catch((error) => console.error(error));
  }, [clientId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedClient = {
      firstName,
      lastName,
      email,
      registrationDateTime,
    };

    axios
      .put(`http://localhost:4000/api/clients/${clientId}`, updatedClient)
      .then((response) => {
        console.log(response);
        setIsSubmitted(true);
      })
      .catch((error) => console.log(error.message));
  };

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    axios
      .delete(`http://localhost:4000/api/clients/${clientId}`)
      .then((response) => {
        console.log(response);
        window.location.href = "/clients";
      })
      .catch((error) => console.log(error.message));
  };

  if (isSubmitted) {
    return (
      <div className={styles.mainContainer}>
        <Navbar />
        <div className={styles.confirmationMessage}>
          <h1>Client updated successfully!</h1>
          <Link to="/clients">View clients list</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <h1>Edit a client</h1>
      <form className={styles.editForm} onSubmit={handleSubmit}>
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
        <button type="submit">Update</button>
      </form>
      <button className={`${styles.deleteButton} ${styles.updateButton}`} onClick={handleDelete}>
        Delete
      </button>

      {showConfirmation && (
        <div className={styles.confirmationMessage}>
          <p>Do you really want to delete this client?</p>
          <button
            className={`${styles.deleteButton} ${styles.confirmationButton}`}
            onClick={handleConfirmDelete}
          >
            Yes
          </button>
          <button
            className={`${styles.deleteButton} ${styles.confirmationButton}`}
            onClick={() => setShowConfirmation(false)}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
}
