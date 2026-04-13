import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import AdminSidebar from "../Admin Sidebar";
import { Menu } from "@mui/icons-material";

export const AdminNavbar = () => {
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  return (
    <>
      <CssBaseline />
      <Box component="nav">
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={toggleSlider}>
              <Menu />
            </IconButton>
            <Typography>Student Management System - Admin View</Typography>
            <Drawer open={open} anchor="left" onChange={toggleSlider}>
              <AdminSidebar toggleSlider={toggleSlider} />
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
