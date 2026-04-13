import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Add, Folder } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Use the options below to manage your academic requests.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card variant="outlined" sx={{ height: "100%" }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 4,
              }}
            >
              <Add sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                New Request
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ mb: 3 }}
              >
                Submit a request for Late Add/Drop, Deadline Extension, or
                Repeat Exam.
              </Typography>
              <Button variant="contained" onClick={() => navigate("newrequest")}>
                Submit Request
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card variant="outlined" sx={{ height: "100%" }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 4,
              }}
            >
              <Folder sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Past Requests
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ mb: 3 }}
              >
                View and track the status of your previously submitted requests.
              </Typography>
              <Button
                variant="outlined"
                onClick={() => navigate("oldrequests")}
              >
                View Requests
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
