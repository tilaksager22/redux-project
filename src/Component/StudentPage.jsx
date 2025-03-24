import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, editStudent } from "../Features/Studentslice";
import { useNavigate, useParams } from "react-router-dom";
import "../css/StudentPage.css";

function StudentForm() {
  const { id } = useParams();
  const isEditing = Boolean(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const existingStudent = useSelector((state) =>
    state.student.students.find((s) => s.id === Number(id))
  );

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
    batch: "",
    additionalInfo: "", 
  });

  useEffect(() => {
    if (isEditing && existingStudent) {
      setFormData(existingStudent);
    }
  }, [isEditing, existingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "age" ? Number(value) : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(editStudent({ id: Number(id), ...formData }));
    } else {
      dispatch(addStudent({ id: Date.now(), ...formData }));
    }
    navigate("/students");
  };

  return (
    <div className="form-container">
      <h1>{isEditing ? "Edit Student" : "Add Student"}</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text"  name="name" value={formData.name} onChange={handleChange} required />

        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />

        <label>Course:</label>
        <input type="text" name="course" value={formData.course} onChange={handleChange} required />

        <label>Batch:</label>
        <input type="text" name="batch" value={formData.batch} onChange={handleChange} required />

        <div className="button-group">
          <button type="submit" className="submit-btn">{isEditing ? "Update" : "Submit"}</button>
          <button type="button" className="cancel-btn" onClick={() => navigate("/students")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
