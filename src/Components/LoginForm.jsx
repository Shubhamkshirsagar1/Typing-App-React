import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../firebaseConfig";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      toast.warn("Fill all details", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        toast.success("User logged in", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        window.location.href = "/dashboard";
        return;
      })
      .catch((err) => {
        toast.error("Invalid credentials", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return;
      });
  };
  return (
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <TextField
        type="email"
        variant="outlined"
        label="Enter Email"
        InputLabelProps={{
          style: {
            color: "white",
          },
        }}
        InputProps={{
          style: {
            color: "white",
          },
        }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        variant="outlined"
        label="Enter Password"
        InputLabelProps={{
          style: {
                color: "white",
          },
        }}
        InputProps={{
          style: {
                color: "white",
          },
        }}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button variant="contained" size="large" onClick={handleSubmit}>
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
