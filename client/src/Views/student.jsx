import { Box } from "@mui/material";
import React from "react";
import { StudentNavbar } from "../Components/Student Navbar";
import { Outlet } from "react-router-dom";

export const Student = () => {
  return (
    <Box>
      <StudentNavbar />
      <Outlet />
    </Box>
  );
};
