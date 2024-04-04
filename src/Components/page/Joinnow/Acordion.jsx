import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const Acordion = () => {
  return (
    <div    className='acordion-card'>
        <p>Add your gift card to earn Stars when you pay and order ahead.</p>
        <div className="joinnow-input2">
           
              <Box component="form" noValidate autoComplete="off">
                <div className="input1">
                  <TextField
                    id="outlined-basic"
                    label="* Card Number (16 digits)"
                    variant="outlined"
                    color="warning"
                  />
                </div>
                <div className="input1-text">
                  <p>No spaces or dashes</p>
                </div>
                <div className="input2">
                  <TextField
                    color="warning"
                    id="outlined-password-input"
                    label="* Security Code"
                    type="password"
                    autoComplete="current-password"
                  />
                </div>
                <div className="input1-text">
                  <p>
                  Scratch to reveal 8-digit code
                  </p>
                </div>
              </Box>
        </div>
    </div>
  )
}

export default Acordion