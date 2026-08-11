/* eslint-env node */

import "dotenv/config";
import express from "express";
import cors from "cors";
import registerRoutes from "./routes/registerRoutes.js";

const app = express();

// CORS
app.use(
  cors({
    origin: "https://softnova-student-form.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
);

// JSON requests
app.use(express.json());

// Routes
app.use("/api", registerRoutes);

// Test route
app.get("/", (req, res) => {
  res.status(200).send("SoftNova Backend Running 🚀");
});

// Export Express app for Vercel
export default app;

// Local development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 8080;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}