import express from "express";
import Work from "../models/work";

const router = express.Router();

// Get all works
router.get("/", async (req, res) => {
  try {
    if (req.query.limit) {
      const works = await Work.find({})
        .select("title preview uniqueName status")
        .limit(parseInt(req.query.limit as string))
        .where({ selected: true });
      res.status(200).json(works);
    } else {
      const works = await Work.find({}).select(
        "title preview uniqueName shortDescription"
      );
      res.status(200).json(works);
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// Find work by ID
router.get("/:id", async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    if (work === null) {
      res.status(404).json({ message: "Cannot find car" });
    } else {
      res.status(200).json(work);
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

export default router;
