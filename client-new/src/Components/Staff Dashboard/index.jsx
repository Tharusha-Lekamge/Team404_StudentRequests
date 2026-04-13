import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Inbox } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const StaffDashboard = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Staff Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Review and action student requests assigned to you.
      </Typography>
      <Card variant="outlined" sx={{ maxWidth: 400 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 4,
          }}
        >
          <Inbox sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            Pending Requests
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mb: 3 }}
          >
            No pending requests at this time. Check back later.
          </Typography>
          <Button variant="contained" onClick={() => navigate("viewrequest")}>
            View Requests
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};
