import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/router.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`application running on port ${PORT}`));
