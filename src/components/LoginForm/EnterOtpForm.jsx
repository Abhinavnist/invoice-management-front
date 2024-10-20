import React, { useState } from "react"
import { TextField, Button, Box } from "@mui/material"
import logo from "./../../assets/images/astha-brand-logo.png"
import "./LoginForm.css" // Reusing the same styles as LoginForm

const EnterOtpForm = ({ showLoginForm }) => {
  const [otp, setOtp] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle OTP verification logic here
  }

  return (
    <Box className="login-container">
      <Box className="login-form">
        <div className="logo">
          <img
            src={logo}
            alt="astha-logo"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            className="textarea"
            placeholder="Enter OTP"
            variant="outlined"
            fullWidth
            margin="normal"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            className="login-button"
          >
            Verify OTP
          </Button>
          <Button
            className="back-to-login"
            onClick={showLoginForm}
          >
            Back to Login
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default EnterOtpForm
