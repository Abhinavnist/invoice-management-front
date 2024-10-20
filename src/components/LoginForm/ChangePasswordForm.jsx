import React, { useState } from "react"
import { TextField, Button, Box } from "@mui/material"
import logo from "./../../assets/images/astha-brand-logo.png"
import "./LoginForm.css" // Reusing the same styles as LoginForm

const ChangePasswordForm = ({ showLoginForm }) => {
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle password change logic here
    if (newPassword === confirmPassword) {
      // Proceed with password change
      console.log("Password changed successfully!")
    } else {
      alert("Passwords do not match!")
    }
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
            placeholder="Enter New Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            className="textarea"
            placeholder="Confirm New Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            className="login-button"
          >
            Change Password
          </Button>
          <p
            className="back-to-login"
            onClick={showLoginForm}
          >
            Back to Login
          </p>
        </form>
      </Box>
    </Box>
  )
}

export default ChangePasswordForm
