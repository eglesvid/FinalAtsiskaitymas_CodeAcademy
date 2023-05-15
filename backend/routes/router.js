import express from "express";
import {
  login,
  getAllClients,
  getClientById,
  createNewClient,
  updateClientById,
  deleteClientById,
} from "../controllers/controller.js";

const router = express.Router();

router.post("/login", login);

router.get("/api/clients", getAllClients);
router.get("/api/clients/:id", getClientById);
router.post("/api/clients", createNewClient);
router.put("/api/clients/:id", updateClientById);
router.delete("/api/clients/:id", deleteClientById);

export default router;
