<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Student from "./Components/Student";
import Navbar from "./Components/Navbar";
import Contect from "./Components/Contect";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Navbar />
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/Student"
            element={
              <>
                <Navbar /> <Student />
              </>
            }
          ></Route>
          <Route
            path="/Contect"
            element={
              <>
                <Navbar /> <Contect />{" "}
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Student from "./Component/Student";
import StudentPage from "./Component/StudentPage";
import Contact from "./Component/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/students" element={<Student />} />
        <Route path="/add-student" element={<StudentPage />} />
        <Route path="/edit-student/:id" element={<StudentPage/>} />
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Student />} />
        <Route path="/students/:id" element={<StudentPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
>>>>>>> d033001 (third)
  );
}

export default App;
