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

function App() {
  const [token, setToken] = useState();

  // if (!token) {
  //   return <SignInSide />;
  // }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="signup" element={<SignUpSide />} />
        <Route path="student/" element={<Student />}>
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
