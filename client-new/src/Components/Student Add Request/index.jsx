import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, Select, MenuItem, InputLabel, Card } from "@mui/material";
import useToken from "../../hooks/useToken";

const theme = createTheme();

const decodeToken = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
};

export default function StudentNewRequest() {
  const { token } = useToken();
  const [submitError, setSubmitError] = React.useState(null);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const decoded = decodeToken(token);

    const payload = {
      userIndexNo: data.get("index"),
      userName: data.get("name"),
      user: decoded?.id ?? "",
      requestType: data.get("type"),
      requestInfo: data.get("subject"),
      additionalDetails: data.get("additional"),
      submittedDate: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/v1/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        setSubmitError(json.message ?? "Submission failed");
      } else {
        setSubmitted(true);
        setSubmitError(null);
        event.target.reset();
      }
    } catch {
      setSubmitError("Network error — please try again");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Card
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 8,
            backgroundColor: "#eeeeee",
            width: "100%",
            alignSelf: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            New Request
          </Typography>
          {submitted && (
            <Typography color="success.main" sx={{ mt: 1 }}>
              Request submitted successfully.
            </Typography>
          )}
          {submitError && (
            <Typography color="error" sx={{ mt: 1 }}>
              {submitError}
            </Typography>
          )}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <TextField
                  name="subject"
                  required
                  fullWidth
                  id="subject"
                  label="Subject"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="index"
                  required
                  fullWidth
                  id="indexnumber"
                  label="Index Number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                />
              </Grid>
              <Grid item xs={12} justifyContent="center">
                <FormControl sx={{ minWidth: 100 }} fullWidth>
                  <InputLabel id="select-label">Request Type</InputLabel>
                  <Select
                    labelId="select-label"
                    id="select"
                    name="type"
                    label="Request Type"
                    fullWidth
                    defaultValue=""
                  >
                    <MenuItem value="late-add-drop">Late Add/Drop</MenuItem>
                    <MenuItem value="extend-deadline">Deadline Extension</MenuItem>
                    <MenuItem value="repeat-as-first-attempt">Repeat Exam</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  id="additional"
                  name="additional"
                  label="Additional Information"
                />
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
