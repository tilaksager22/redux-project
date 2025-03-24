import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/Student.css";
function Student() {
  const students = useSelector((state) => state.student.students);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Student List</h1>
      <button onClick={() => navigate("/add-student")}>Add Student</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.course}</td>
              <td>{s.batch}</td>
              <td>
                <button onClick={() => navigate(`/edit-student/${s.id}`)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
