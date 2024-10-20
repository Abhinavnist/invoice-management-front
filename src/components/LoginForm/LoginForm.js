import React, { useState } from "react"
// import { useLoginMutation } from "../../features/auth/authApiSlice"
// import { useDispatch } from "react-redux"
// import { setCredentials } from "./../../features/auth/authSlice"
import { TextField, Button, Box } from "@mui/material"
import logo from "./../../assets/images/astha-brand-logo.png"
import "./LoginForm.css"
import apple from "./../../assets/images/apple-fill.svg"
import playstore from "./../../assets/images/google-play-icon.png"
import heart from "./../../assets/images/heart-pulse-fill.svg"
// import { useNavigate } from "react-router-dom"
// import { errorToast, successToast } from "../../utils/toastConfig"

const LoginForm = ({ showForgetPasswordForm }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // const [login, { isLoading }] = useLoginMutation()
  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!username || !password) {
      alert("Please provide both email and password")
      return
    }
    try {
      // const userData = await login({ email: username, password }).unwrap()
      // console.log(userData)
      // dispatch(setCredentials(userData))
      // // Save token and role information in localStorage
      // localStorage.setItem("token", userData.token)
      // localStorage.setItem("roleId", userData.user.roleId) // Save the role ID
      // // Navigate based on user role
      // const roleId = userData.user.roleId
      // // Use setTimeout to navigate after a short delay
      // setTimeout(() => {
      //   navigate("/home")
      // }, 1000) // Adjust the delay as necessary
      // successToast("login successfull")
    } catch (err) {
      console.error("Failed to login", err)
      // errorToast("Failed to login", err)
    }
  }

  return (
    <Box className="login-container">
      <Box className="login-form">
        <form onSubmit={handleSubmit}>
          <TextField
            className="textarea"
            // label="Username"
            placeholder="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            className="textarea"
            // label="Password"
            placeholder="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            //disabled={isLoading}
            fullWidth
            className="login-button"
          >
            Login
          </Button>
          <p
            className="forgot-password"
            onClick={showForgetPasswordForm}
          >
            Forgot Password?
          </p>
          <div className="download-links">
            <p>Available On</p>
            <section>
              <span>
                <img
                  src={playstore}
                  alt=""
                />
                <a href="https://play.google.com/"> Play Store</a>{" "}
              </span>
              <span>
                <img
                  src={apple}
                  alt=""
                />
                <a href="https://www.apple.com/in/app-store/">App Store</a>
              </span>
            </section>
          </div>
          <div className="footer">
            <p>
              Made with{" "}
              <img
                src={heart}
                alt=""
              />{" "}
              in India
            </p>
            <p>Copyright © 2024 Aastha</p>
          </div>
        </form>
      </Box>
    </Box>
  )
}

export default LoginForm
