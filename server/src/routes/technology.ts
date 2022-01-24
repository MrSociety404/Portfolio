import express from "express";

import Technology from "../models/Technolohy";

const router = express.Router();

// Get all techs
router.get("/", async (req, res) => {
  try {
    const techs = await Technology.find();
    res.status(200).json(techs);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

export default router;
