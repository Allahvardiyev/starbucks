import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import "./Signin.css";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Signin = () => {
  return (
    <div className="sign-in">
      <div className="signin-head">
        <h2>Sign in or create an account</h2>
      </div>
      <div className="signin-box">
        <div>
          <p>
            <span>*</span>
            indicates required field
          </p>
          <Box component="form" noValidate autoComplete="off">
            <div className="input1">
              <TextField
                id="outlined-basic"
                label="* Username or email address"
                variant="outlined"
                color="warning"
              />
            </div>
            <div className="input2">
              <TextField
                color="warning"
                id="outlined-password-input"
                label="* Password"
                type="password"
                autoComplete="current-password"
              />
            </div>
          </Box>
          <div className="check">
            <Checkbox {...label} defaultChecked />
            <p>Keep me signed in.</p>
            <Link>Details</Link>
          </div>
          <div className="user">
            <Link>Forgot your username?</Link>
          </div>
          <div className="user">
            <Link>Forgot your password?</Link>
          </div>
        </div>
        <div className="signin-btn">
          <Link>Sign in</Link>
        </div>
      </div>
      <div className="signin-bottom">
        <h2>JOIN STARBUCKS® REWARDS</h2>
        <p>
          Join Starbucks® Rewards to earn free food and drinks, get free
          refills, pay and order with your phone, and more.
        </p>
        <Link>Join now</Link>
      </div>
    </div>
  );
};

export default Signin;
