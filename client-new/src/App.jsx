import SignInSide from "./Views/signin";
import Student_Sidebar from "./Components/Student Sidebar";
import { StudentNavbar } from "./Components/Student Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentNewRequest from "./Components/Student Add Request";
import { Student } from "./Views/student";
import { StudentRequestTable } from "./Components/Student Request Table";
import { useState } from "react";
import { Admin } from "./Views/admin";
import { Staff } from "./Views/staff";
import { StaffViewRequest } from "./Components/Staff View Request";
import SignUpSide from "./Views/signup";
import StudentEditRequest from "./Components/Student Edit Request";
import useToken from "./hooks/useToken";
import { Navigate } from "react-router";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <Router>
        <Routes>
          <Route path="" element={<SignInSide setToken={setToken} />} />
          <Route path="signup" element={<SignUpSide setToken={setToken} />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="" element={<Navigate to="student" replace />} />
        <Route path="signup" element={<Student />} />
        <Route path="student" element={<Student />}>
          <Route path="newrequest" element={<StudentNewRequest />} />
          <Route path="oldrequests" element={<StudentRequestTable />} />
        </Route>
        <Route path="admin" element={<Admin />} />
        <Route path="staff" element={<Staff />}>
          <Route path="viewrequest" element={<StaffViewRequest />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
