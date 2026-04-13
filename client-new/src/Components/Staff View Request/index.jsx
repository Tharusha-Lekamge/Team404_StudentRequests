import {
  Box,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Button,
  CircularProgress,
  Chip,
} from "@mui/material";
import React, { useState, useEffect } from "react";

const statusColor = (status) => {
  if (status === "approved") return "success";
  if (status === "declined") return "error";
  return "default";
};

export const StaffViewRequest = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/v1/requests")
      .then((r) => r.json())
      .then((json) => {
        setRequests(json.data?.requests ?? []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load requests");
        setLoading(false);
      });
  }, []);

  const setApproval = async (id, type) => {
    try {
      const res = await fetch("/api/v1/requests", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, type }),
      });
      if (res.ok) {
        setRequests((prev) =>
          prev.map((r) => (r._id === id ? { ...r, approvalStatus: type } : r))
        );
      }
    } catch {
      // silently ignore network errors
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (requests.length === 0) {
    return (
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Typography color="text.secondary">No requests found.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, mt: 4, px: 4 }}>
      <Typography variant="h5" gutterBottom>
        All Requests
      </Typography>
      <Grid container spacing={3}>
        {requests.map((req) => (
          <Grid item xs={12} md={6} key={req._id}>
            <Card
              sx={{
                backgroundColor: "#f1f1f1",
                borderRadius: "10px",
              }}
            >
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={5}>
                    <Typography variant="subtitle2" color="text.secondary">Name</Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography variant="body2">{req.userName}</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="subtitle2" color="text.secondary">Index Number</Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography variant="body2">{req.userIndexNo}</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="subtitle2" color="text.secondary">Request Type</Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography variant="body2">{req.requestType}</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="subtitle2" color="text.secondary">Info</Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography variant="body2">{req.requestInfo}</Typography>
                  </Grid>
                  {req.additionalDetails && (
                    <>
                      <Grid item xs={5}>
                        <Typography variant="subtitle2" color="text.secondary">Additional</Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography variant="body2">{req.additionalDetails}</Typography>
                      </Grid>
                    </>
                  )}
                  <Grid item xs={5}>
                    <Typography variant="subtitle2" color="text.secondary">Status</Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Chip
                      label={req.approvalStatus}
                      color={statusColor(req.approvalStatus)}
                      size="small"
                    />
                  </Grid>
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
                  disabled={req.approvalStatus === "approved"}
                  onClick={() => setApproval(req._id, "approved")}
                >
                  Approve
                </Button>
                <Button
                  style={{ backgroundColor: "#d91c2c" }}
                  variant="contained"
                  disabled={req.approvalStatus === "declined"}
                  onClick={() => setApproval(req._id, "declined")}
                >
                  Reject
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
