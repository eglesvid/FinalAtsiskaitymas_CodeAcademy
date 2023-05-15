import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Clients from "./components/AboutClients/Clients/Clients";
import RegisterClient from "./components/AboutClients/RegisterClient/RegisterClient";
import EditClient from "./components/AboutClients/EditClient/EditClient";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients/register" element={<RegisterClient />} />
        <Route path="/clients/edit/:clientId" element={<EditClient />} />
      </Routes>
    </div>
  );
}

export default App;
