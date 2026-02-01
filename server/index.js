import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./routes/User.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// API ROUTES
app.use("/user", UserRoutes);

// ERROR HANDLER
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

// TEST API ROUTE
app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Hello developers from Fitxhub API",
  });
});

// -----------------------------------------------
// ✅ Serving React Build (Vite → client/dist)
// -----------------------------------------------
app.use(express.static(path.join(__dirname, "client", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// -----------------------------------------------
// DATABASE
// -----------------------------------------------

const MONGODB_URI = "mongodb://localhost:27017/";

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(MONGODB_URI);
    console.log("✓ MongoDB connected");
  } catch (err) {
    console.error("✗ MongoDB connection failed");
    console.error(err);
    process.exit(1);
  }
};

// -----------------------------------------------
// START SERVER
// -----------------------------------------------
const startServer = async () => {
  try {
    connectDB();
    app.listen(8008, () => console.log("Server started on port 8008"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
