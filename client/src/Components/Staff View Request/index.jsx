import {
  Card,
  Grid,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { bgcolor, Box } from "@mui/system";
import React from "react";

export const StaffViewRequest = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 10 }}>
      <Grid container justifyContent="center">
        <Grid item xs={8} md={6}>
          <Card
            sx={{
              minWidth: 275,
              backgroundColor: "#f1f1f1",
              borderRadius: "10px",
            }}
          >
            <CardContent align="center">
              <Typography sx={{ fontSize: 36 }} gutterBottom align="center">
                Request
              </Typography>
              <Grid
                container
                sx={{ flexGrow: 1 }}
                spacing="30px"
                marginTop="20px"
                marginLeft="20px"
                align="left"
              >
                <Grid item xs={4}>
                  <Typography variant="h6"> Name</Typography>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={4}>
                  <Typography variant="h6"> Index Number</Typography>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={4}>
                  <Typography variant="h6"> Request Type</Typography>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={4}>
                  <Typography variant="h6"> Additional Information</Typography>
                </Grid>
                <Grid item xs={6}></Grid>
              </Grid>
            </CardContent>
            <CardActions
              style={{
                justifyContent: "space-evenly",
                margin: "10px",
                marginBottom: "20px",
                marginInline: "30px",
              }}
            >
              <Button
                style={{ backgroundColor: "#357a38" }}
                variant="contained"
              >
                Approve
              </Button>
              <Button
                style={{ backgroundColor: "#d91c2c" }}
                variant="contained"
              >
                Reject
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
