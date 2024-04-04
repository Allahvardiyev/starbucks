import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import "./Joinnow.css";
import CheckIcon from "@mui/icons-material/Check";
import Acordion from "./Acordion";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Joinnow = () => {
  const [cardVisible, setCardVisible] = useState(false);

  const toggleCardVisibility = () => {
    setCardVisible(!cardVisible);
  };
  return (
    <div className="join-now">
      <div className="joinnow-head">
        <h1>Create an account</h1>
        <h4>STARBUCKS® REWARDS</h4>
        <p>
          Join Starbucks Rewards to earn Stars for free food and drinks, any way
          you pay. Get access to mobile ordering, a birthday Reward, and
          moremore.
        </p>
      </div>
      <div className="joinnow-box">
        <div className="joinnow-box-wrapper">
          <p>
            <span>*</span>
            indicates required field
          </p>
          <div className="inputs">
            <div className="joinnow-input1">
              <h5>Personal Information</h5>
              <Box component="form" noValidate autoComplete="off">
                <div className="input1">
                  <TextField
                    id="outlined-basic"
                    label="* First Name"
                    variant="outlined"
                    color="warning"
                  />
                </div>
                <div className="input2">
                  <TextField
                    color="warning"
                    id="outlined-password-input"
                    label="* Last Name"
                    type="password"
                    autoComplete="current-password"
                  />
                </div>
              </Box>
            </div>
            <div className="joinnow-input2">
              <h5>Account Security</h5>
              <Box component="form" noValidate autoComplete="off">
                <div className="input1">
                  <TextField
                    id="outlined-basic"
                    label="* Email address"
                    variant="outlined"
                    color="warning"
                  />
                </div>
                <div className="input1-text">
                  <p>This will be your username</p>
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
                <div className="input1-text">
                  <p>
                    Create a password 8 to 25 characters long that includes at
                    least 1 uppercase and 1 lowercase letter, 1 number and 1
                    special character like an exclamation point or asterisk.
                  </p>
                </div>
              </Box>
            </div>
            <div className="acordion">
              <h5>Already have a Starbucks gift card?</h5>
              <CheckIcon onClick={toggleCardVisibility} />
            </div>
            {cardVisible && <Acordion />}
            <div className="joinnow-input3">
              <h6>COLLECT MORE STARS & EARN REWARDS</h6>
              <p>
                Email is a great way to know about offers and what’s new from
                Starbucks.
              </p>
              <div className="check">
                <Checkbox {...label} defaultChecked />
                <p>Yes, I’d like email from Starbucks.</p>
              </div>
              <div className="joinnow-inputs-3-text">
              <p>Know about initiatives, announcements and product offers.</p>
              </div>
              
            </div>
          </div>
          <div className="joinnow-btn">
          <Link>Create account</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Joinnow;
