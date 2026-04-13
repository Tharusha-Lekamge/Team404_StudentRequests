import SignInSide from "./Views/signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentNewRequest from "./Components/Student Add Request";
import { Student } from "./Views/student";
import { StudentRequestTable } from "./Components/Student Request Table";
import { StudentDashboard } from "./Components/Student Dashboard";
import { Admin } from "./Views/admin";
import { AdminDashboard } from "./Components/Admin Dashboard";
import { Staff } from "./Views/staff";
import { StaffDashboard } from "./Components/Staff Dashboard";
import { StaffViewRequest } from "./Components/Staff View Request";
import SignUpSide from "./Views/signup";
import useToken from "./hooks/useToken";
import { Navigate } from "react-router";

function App() {
  const { token, setToken, role } = useToken();

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
        <Route path="" element={<Navigate to={role} replace />} />
        <Route path="student" element={<Student />}>
          <Route index element={<StudentDashboard />} />
          <Route path="newrequest" element={<StudentNewRequest />} />
          <Route path="oldrequests" element={<StudentRequestTable />} />
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
        </Route>
        <Route path="staff" element={<Staff />}>
          <Route index element={<StaffDashboard />} />
          <Route path="viewrequest" element={<StaffViewRequest />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
