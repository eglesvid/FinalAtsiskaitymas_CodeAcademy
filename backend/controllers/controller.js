import Client from "../models/clientModel.js";
import Admin from "../models/adminModel.js";

export async function login(req, res) {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(400).json({ message: "No admin with this username found" });
    }

    if (password === admin.password) {
      return res.status(200).json({ message: "Successfully logged in" });
    } else {
      return res.status(400).json({ message: "Password is incorrect" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllClients(req, res) {
  try {
    const clients = await Client.find({});

    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getClientById(req, res) {
  try {
    const { id } = req.params;
    const client = await Client.findById(id);

    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createNewClient(req, res) {
  if (!req.body) {
    res.status(404).send({ message: "Content cannot be empty" });
    return;
  }

  try {
    const { firstName, lastName, email, registrationDateTime } = req.body;
    const parsedRegistrationDateTime = new Date(registrationDateTime);

    const client = {
      firstName,
      lastName,
      email,
      registrationDateTime: parsedRegistrationDateTime,
    };

    const clientRes = await Client.create(client);

    res.json(clientRes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateClientById(req, res) {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update cannot be empty" });
  }

  try {
    const { id } = req.params;
    const { firstName, lastName, email, registrationDateTime } = req.body;
    const parsedRegistrationDateTime = new Date(registrationDateTime);

    const updatedClient = await Client.findOneAndUpdate(
      { _id: id },
      { firstName, lastName, email, registrationDateTime: parsedRegistrationDateTime },
      { new: true }
    );

    if (!updatedClient) {
      return res.status(404).send({ message: `Cannot update client with id ${id}` });
    }

    res.send(updatedClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteClientById(req, res) {
  try {
    const { id } = req.params;

    const resp = await Client.findByIdAndDelete(id);

    res.json({
      message: "Client was deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
