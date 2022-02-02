import express from "express";

import Mail from "../models/Mail";

const router = express.Router();

// Get all techs
router.post("/", async (req, res) => {
  try {
    const mail = await Mail.create(req.body);
    res.status(200).json(mail);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

export default router;
