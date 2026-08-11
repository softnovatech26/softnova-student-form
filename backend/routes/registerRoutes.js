import express from "express";
import { registerStudent } from "../controllers/registerController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Student Registration
router.post(
  "/register",
  upload.single("paymentScreenshot"),
  registerStudent
);

export default router;