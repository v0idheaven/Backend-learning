import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connection.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

await connectDB();

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
