import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, Modal, Tab, Tabs } from "@mui/material";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Box } from "@mui/system";
import GoogleButton from "react-google-button";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebaseConfig";
import LogoutIcon from "@mui/icons-material/Logout";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";

const AccountCircle = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [user] = useAuthState(auth);

  const handleClose = () => {
    setOpen(false);
  };

  const handleValueChange = (e, v) => {
    setValue(v);
  };

  const navigate = useNavigate();
  
  const handleUserIconClick = () => {
    if (user) {
      navigate("/user");
    } else {
      setOpen(true);
    }
  };
  const logoutUser = () => {
    auth.signOut().then((response) => {
      toast.success("User Logged Out", {
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

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        toast.success("User Logged In!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(response);
        handleClose();
      })
      .catch((err) => {
        toast.error("Google auth not Working!!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(err);
      });
  };
  return (
    <div>
      <Tippy content="Login / SignUp">
        <AccountCircleIcon onClick={handleUserIconClick} />
      </Tippy>

      {user && <LogoutIcon onClick={logoutUser} />}

      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(2px)",
        }}
      >
        <div
          className="box"
          style={{ width: "400px", border: "1px solid white" }}
        >
          <AppBar position="static" style={{ background: "transparent" }}>
            <Tabs
              value={value}
              onChange={handleValueChange}
              variant="fullWidth"
            >
              <Tab label="login" style={{ color: "white" }} />
              <Tab label="signup" style={{ color: "white" }} />
            </Tabs>
          </AppBar>
          {value === 0 && <LoginForm handleClose={handleClose} />}
          {value === 1 && <SignupForm handleClose={handleClose} />}

          <Box style={{ textAlign: "center" }}>
            <span>OR</span>
            <GoogleButton
              style={{ width: "87%", margin: "10px auto" }}
              onClick={handleGoogleSignIn}
            />
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default AccountCircle;
