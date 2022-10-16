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
import StudentSidebar from "../Student Sidebar";
import { Menu } from "@mui/icons-material";

export const StudentNavbar = () => {
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
            <IconButton onClick={toggleSlider} sx={{ mr: 2 }}>
              <Menu />
            </IconButton>
            <Typography>Student Management System</Typography>
            <Drawer open={open} anchor="left" onChange={toggleSlider}>
              <StudentSidebar toggleSlider={toggleSlider} />
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
