import { Button, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./LoginScreen.css"
import LoginLogo from "../../assets/loginLogo.png"
import LogoIcon from "../../assets/BSLogo.svg"
import CustomTextField from '../../components/TextField/TextField'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loggedInUser } from '../../redux/slice'

const LoginScreen = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const loggedInUserStatus = useSelector(state => state.loggedInUser)

  const onSubmitForm = (e) => {
    e.preventDefault()
    const emailfromStorage = localStorage.getItem('username')
    const passwordfromStorage = localStorage.getItem('password')
    if (email.trim() !== "" && password.trim() !== "") {
      if (email === emailfromStorage && password === passwordfromStorage) {
        navigate("/")
        setEmail("")
        setPassword("")
      } else {
        console.error("current user doesn't exists")
      }
      dispatch(loggedInUser(true))
      if (loggedInUserStatus.isLoggedIn == true) {
        console.log('OKOOKOKOK');
        navigate('/')
      }
    }
    console.log('this is set in localStorage', localStorage.getItem('username'))
    console.log('this is set in localStorage', localStorage.getItem('password'))
  }
  return (
    <>
      <form className='form'>
        <Box className="formBox">
          <div className='signuplabelwIcon'>
            <Box
              component={"img"}
              src={LogoIcon}
              width={50}
              height={50}
            />
            <Link to="/signup">sign up</Link>
          </div>
          <Typography variant='caption'>
            <div className="loginLabel">Login To Your Dashboard <DashboardCustomizeIcon /></div>
          </Typography>
          <CustomTextField
            name={"username"}
            label={"User Name"}
            required
            width="300px"
            // value={"username"}
            onChange={(event) => { setEmail(event.target.value) }}
          />
          <CustomTextField
            name={"password"}
            label={"Password"}
            width="300px"
            required
            // value={"password"}
            onChange={(event) => { setPassword(event.target.value) }}
          />
          <Button type="submit" variant="contained" onClick={onSubmitForm} className='submit-form'>Submit</Button>
        </Box>
        <Box
          className="flexedImage"
          component={"img"}
          src={LoginLogo}
          width={300}
          height={300}
        />
      </form>
    </>
  )
}

export default LoginScreen