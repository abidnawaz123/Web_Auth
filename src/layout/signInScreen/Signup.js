import { Button, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./Signup.css"
import FemaleLogo from "../../assets/femaleLogo.png"
import LogoIcon from "../../assets/BSLogo.svg"
import CustomTextField from '../../components/TextField/TextField'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const submitRegistration = (e) => {
        e.preventDefault()
        if (username.trim() !== "" && password.trim() !== "") {
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            navigate('/login')
        }
    }
    return (
        <form className='signup-form'>
            <Box className="formBox">
                <Box
                    component={"img"}
                    src={LogoIcon}
                    width={50}
                    height={50}
                />
                <Link to="/login">Already registered ?</Link>
                <Typography variant='caption'>
                    <div className="loginLabel">Signup to Access Dashboard <DashboardCustomizeIcon /></div>
                </Typography>
                <CustomTextField
                    name={"username"}
                    label={"User Name"}
                    required
                    width="300px"
                    // value={"username"}
                    onChange={(event) => { setUsername(event.target.value) }}
                />
                <CustomTextField
                    name={"password"}
                    label={"Password"}
                    width="300px"
                    required
                    // value={"password"}
                    onChange={(event) => { setPassword(event.target.value) }}
                />
                <Button type="submit" variant="contained" onClick={submitRegistration} className='submit-form'>Register Your account</Button>
            </Box>
            <Box
                className="flexedFemaleImage"
                component={"img"}
                src={FemaleLogo}
                width={300}
                height={300}
            />
        </form>
    )
}

export default Signup