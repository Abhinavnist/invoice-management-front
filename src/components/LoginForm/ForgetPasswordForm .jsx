import React, { useState } from "react"
import { TextField, Button, Box } from "@mui/material"
import logo from "./../../assets/images/astha-brand-logo.png"
import "./LoginForm.css" // Reusing the same styles as LoginForm

const ForgetPasswordForm = ({ showLoginForm, showEnterOtpForm }) => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle forget password logic here
    showEnterOtpForm() // Show the Enter OTP form after submitting
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
            placeholder="Enter your email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            className="login-button"
          >
            Send OTP
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

export default ForgetPasswordForm
