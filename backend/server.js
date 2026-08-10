/* eslint-env node */
import express from "express";
import cors from "cors";
import registerRoutes from "./routes/registerRoutes.js";

const app = express();

app.use(cors({
  origin: "https://softnova-student-form.vercel.app",
  credentials: true,
}));
app.use(express.json());
app.use("/api", registerRoutes);
app.get("/", (req, res) => {
  res.send("SoftNova Backend Running 🚀");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});