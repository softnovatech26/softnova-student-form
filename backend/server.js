/* eslint-env node */
import express from "express";
import cors from "cors";
import registerRoutes from "./routes/registerRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", registerRoutes);
app.get("/", (req, res) => {
  res.send("SoftNova Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});