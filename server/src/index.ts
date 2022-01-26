// Import dependencies
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Import routes
import workRoutes from "./routes/work";
import technologyRoutes from "./routes/technology";
import path from "path";

// Load env variables
dotenv.config();

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    // Confirm DB connection
    console.log("[\x1b[36mINFO\x1b[37m] MongoDB Connected");

    const app = express();

    app.use(express.json());
    app.use(cors());

    // Select route
    app.use("/api/work", workRoutes);
    app.use("/api/techs", technologyRoutes);

    // Acces to upload folder
    app.get("/uploads/:name", (req, res) => {
      res.sendFile(path.join(__dirname, `../uploads/${req.params.name}`));
    });

    // If wrong path, send error
    app.get("*", (req, res) => {
      res.status(404).send();
    });

    // Start server
    app.listen(8080, () => {
      console.log(
        "[\x1b[32mSTART\x1b[37m] Server start on http://localhost:8080/"
      );
    });
  })
  .catch((err) => {
    throw new Error(err);
  });
