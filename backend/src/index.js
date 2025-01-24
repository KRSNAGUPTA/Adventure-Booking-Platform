import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
