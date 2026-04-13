import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { StaffNavbar } from "../Components/Staff Navbar";

export const Staff = () => {
  return (
    <Box>
      <StaffNavbar />
      <Outlet />
    </Box>
  );
};
