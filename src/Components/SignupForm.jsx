import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../firebaseConfig";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = ({ handleClose }) => {
    // If input is Empty
    if (!email || !password || !confirmPassword) {
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
    
    // If paassword does not match
    if (password !== confirmPassword) {
      toast.warn("Password mismatch", {
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
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        toast.success("User created!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        // window.location.href = "/";
        handleClose();
        return;
      })
      .catch((err) => {
        toast.error("Not able to create user", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
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
      <TextField
        type="password"
        variant="outlined"
        label="Confirm Password"
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
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button variant="contained" size="large" onClick={handleSubmit}>
        Signup
      </Button>
    </Box>
  );
};

export default SignupForm;
