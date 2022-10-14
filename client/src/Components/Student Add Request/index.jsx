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

const theme = createTheme();

export default function StudentNewRequest() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            New Request
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
                  <InputLabel id="select-label">Select</InputLabel>
                  <Select
                    labelId="select-label"
                    id="select"
                    label="Select"
                    fullWidth
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
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
