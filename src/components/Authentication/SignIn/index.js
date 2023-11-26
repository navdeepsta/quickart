import * as React from "react";
import { useState, useEffect } from "react";
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
import { useLocation, useNavigate, Link } from "react-router-dom";
import Profile from "../../Profile";
import usersData from "./users.json";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      setLoggedIn(true);
      setUser(state.user);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!localStorage.getItem("users"))
      localStorage.setItem("users", JSON.stringify(usersData));

    let result = localStorage.getItem("users");
    result = JSON.parse(result);

    // Simulate a simple login check
    const user = result.users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setLoggedIn(true);
      setUser(user);
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    navigate("/");
  };

  const updateUser = (updatedUser) => {
    let result = localStorage.getItem("users");
    result = JSON.parse(result);
    const users = result.users.filter(
      (user) => user.username !== updatedUser.username
    );
    users.push(updatedUser);
    localStorage.setItem("users", JSON.stringify({ users: users }));
    setUser(updatedUser);
  };

  return (
    <>
      {loggedIn ? (
        <Profile
          user={user}
          loggedIn={loggedIn}
          updateUser={(updatedUser) => updateUser(updatedUser)}
          onLogout={handleLogout}
        />
      ) : (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  type="textfield"
                  name="username"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
            
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link to={"/signup"} variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}
