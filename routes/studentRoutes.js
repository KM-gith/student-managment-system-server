import express from "express";
import Student from "../models/studentModel.js";

const router = express.Router();

// GET all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

// POST create student
router.post("/", async (req, res) => {
  const { name, email, course } = req.body;
  try {
    const student = await Student.create({ name, email, course });
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

// PUT update student
router.put("/:id", async (req, res) => {
  const { name, email, course } = req.body;
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { name, email, course },
      { new: true }
    );
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

// DELETE student
router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted." });
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

export default router;
