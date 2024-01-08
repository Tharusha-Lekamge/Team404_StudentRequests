import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { Folder, Person, Add } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const StudentSidebar = (toggleSlider) => {
  return (
    <Box
      className="classes.MenudSliderContainer"
      component="div"
      sx={{ alignContent: "center" }}
    >
      <Avatar
        className="classes.avatar"
        src="https://i.ibb.co/rx5DFbs/avatar.png"
        alt="Juaneme8"
        sx={{ alignItems: "center" }}
      />
      <Divider />
      <List>
        <ListItem>
          <ListItem
            button
            component={Link}
            to="newrequest"
            onClick={toggleSlider}
          >
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary="New Request" />
          </ListItem>
        </ListItem>
        <ListItem>
          <ListItem
            button
            component={Link}
            to="oldrequests"
            onClick={toggleSlider}
          >
            <ListItemIcon>
              <Folder />
            </ListItemIcon>
            <ListItemText primary="Past Request" />
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

export default StudentSidebar;
