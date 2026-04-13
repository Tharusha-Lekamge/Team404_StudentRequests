import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, Select, MenuItem, InputLabel, Card } from "@mui/material";
import { Edit } from "@mui/icons-material";

const theme = createTheme();

export default function StudentEditRequest({ currentData }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // alert(
    //   JSON.stringify({
    //     subject: data.get("subject"),
    //     index: data.get("index"),
    //     name: data.get("name"),
    //     type: data.get("type"),
    //     additional: data.get("additional"),
    //   })
    // );
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
            <Edit />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Request
          </Typography>
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
                  value={currentData.name}
                  name="subject"
                  required
                  fullWidth
                  id="subject"
                  label={currentData.name}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="Index Number"
                  name="index"
                  required
                  fullWidth
                  id="indexnumber"
                  label="Index Number"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="Name"
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
                  >
                    <MenuItem value={10}>Late Add/Drop</MenuItem>
                    <MenuItem value={20}>Deadline Extension</MenuItem>
                    <MenuItem value={30}>Repeat Exam</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
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
