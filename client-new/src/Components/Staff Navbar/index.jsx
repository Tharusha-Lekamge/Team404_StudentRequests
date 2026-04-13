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
import { Menu } from "@mui/icons-material";
import StaffSidebar from "../Staff Sidebar";

export const StaffNavbar = () => {
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
            <Typography>Student Management System - Staff View</Typography>
            <Drawer open={open} anchor="left" onChange={toggleSlider}>
              <StaffSidebar toggleSlider={toggleSlider} />
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
