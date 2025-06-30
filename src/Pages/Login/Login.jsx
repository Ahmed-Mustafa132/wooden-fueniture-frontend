import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  Alert,
  Divider,
  Link,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig/axiosConfig";
import { useAuth } from '../../Context/AuthContext';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const response = await axiosInstance.post("/users/login", {
          email,
          password,
        });
        login(response.data.token, response.data.user);
        navigate("/dashboard");
      } else {
        const response = await axiosInstance.post("/users/register", {
          name,
          email,
          password,
        });
        setIsLogin(true);
        setError("Registration successful! Please login.");
  
      }
    } catch (err) {
      setError(isLogin ? "Invalid email or password" : "Registration failed");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {isLogin ? "Login" : "Create Account"}
        </Typography>

        {error && (
          <Alert
            severity={error.includes("successful") ? "success" : "error"}
            sx={{ mt: 2, width: "100%" }}
          >
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          {!isLogin && (
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isLogin ? "Sign In" : "Create Account"}
          </Button>

          <Divider sx={{ my: 2 }}>or</Divider>

          <Link
            component="button"
            variant="body2"
            onClick={() => setIsLogin(!isLogin)}
            sx={{ textAlign: "center", width: "100%", textDecoration: "none" }}
          >
            {isLogin
              ? "Create a new account"
              : "Already have an account? Sign in"}
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
