import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoutes.js"
import dotenv from "dotenv";
dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running....");
});
app.use("/api/user", userRoute);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
