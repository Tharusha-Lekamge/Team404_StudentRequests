import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { Dashboard, People, Assignment } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = ({ toggleSlider }) => {
  return (
    <Box component="div" sx={{ alignContent: "center" }}>
      <Avatar
        src="https://i.ibb.co/rx5DFbs/avatar.png"
        alt="Admin"
        sx={{ alignItems: "center" }}
      />
      <Divider />
      <List>
        <ListItem>
          <ListItem
            button
            component={Link}
            to="/admin"
            onClick={toggleSlider}
          >
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </ListItem>
        <ListItem>
          <ListItem
            button
            component={Link}
            to="/admin/requests"
            onClick={toggleSlider}
          >
            <ListItemIcon>
              <Assignment />
            </ListItemIcon>
            <ListItemText primary="All Requests" />
          </ListItem>
        </ListItem>
        <ListItem>
          <ListItem
            button
            component={Link}
            to="/admin/users"
            onClick={toggleSlider}
          >
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Manage Users" />
          </ListItem>
        </ListItem>
      </List>
    </Box>
  );
};

export default AdminSidebar;
