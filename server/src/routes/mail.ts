import express from "express";

const router = express.Router();

// Get all techs
router.post("/", async (req, res) => {
  try {
    res.send("ok");
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

export default router;
