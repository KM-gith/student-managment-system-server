import Student from "../models/Student.js";

// GET ALL
export const getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

// CREATE
export const createStudent = async (req, res) => {
  const student = await Student.create(req.body);
  res.json(student);
};

// UPDATE
export const updateStudent = async (req, res) => {
  const updated = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

// DELETE
export const deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
};