import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { AdminNavbar } from "../Components/Admin Navbar";

export const Admin = () => {
  return (
    <Box>
      <AdminNavbar />
      <Outlet />
    </Box>
  );
};
