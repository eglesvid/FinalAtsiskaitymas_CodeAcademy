import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import styles from "./Clients.module.css";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/clients")
      .then((response) => {
        const sortedClients = response.data.sort((a, b) => {
          return new Date(a.registrationDateTime) - new Date(b.registrationDateTime);
        });
        setClients(sortedClients);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!localStorage.getItem("isLoggedIn")) {
    return navigate("/login");
  }

  const handleEdit = (clientId) => {
    window.location = `/clients/edit/${clientId}`; // I can navigate to edit page with client ID as URL parameter
  };

  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <h1>Clients</h1>
      <table className={styles.clientsTable}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Registration Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client._id}>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>{client.email}</td>
              <td>{client.registrationDateTime.slice(0, 16).replace("T", " ")}</td>
              <td>
                <button className={styles.editButton} onClick={() => handleEdit(client._id)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/clients/register" className={styles.registerLink}>
        Register a new client
      </Link>
    </div>
  );
}
