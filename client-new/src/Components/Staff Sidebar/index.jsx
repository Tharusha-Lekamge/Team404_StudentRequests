import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { Inbox, Person } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const StaffSidebar = ({ toggleSlider }) => {
  return (
    <Box component="div" sx={{ alignContent: "center" }}>
      <Avatar
        src="https://i.ibb.co/rx5DFbs/avatar.png"
        alt="Staff"
        sx={{ alignItems: "center" }}
      />
      <Divider />
      <List>
        <ListItem>
          <ListItem
            button
            component={Link}
            to="viewrequest"
            onClick={toggleSlider}
          >
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="View Requests" />
          </ListItem>
        </ListItem>
        <ListItem>
          <ListItem button>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </ListItem>
      </List>
    </Box>
  );
};

export default StaffSidebar;
