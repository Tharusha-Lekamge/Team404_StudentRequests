import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import {
  Assignment,
  CheckCircle,
  Cancel,
  HourglassEmpty,
} from "@mui/icons-material";
import React from "react";

const statCards = [
  {
    label: "Total Requests",
    value: 0,
    icon: <Assignment sx={{ fontSize: 36 }} />,
    color: "primary.main",
  },
  {
    label: "Pending",
    value: 0,
    icon: <HourglassEmpty sx={{ fontSize: 36 }} />,
    color: "warning.main",
  },
  {
    label: "Approved",
    value: 0,
    icon: <CheckCircle sx={{ fontSize: 36 }} />,
    color: "success.main",
  },
  {
    label: "Rejected",
    value: 0,
    icon: <Cancel sx={{ fontSize: 36 }} />,
    color: "error.main",
  },
];

export const AdminDashboard = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Overview of all student requests in the system.
      </Typography>
      <Grid container spacing={3}>
        {statCards.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
            <Card variant="outlined">
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 3,
                }}
              >
                <Box sx={{ color: stat.color, mb: 1 }}>{stat.icon}</Box>
                <Typography variant="h3" fontWeight="bold">
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
