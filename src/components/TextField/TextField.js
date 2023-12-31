import { TextField } from '@mui/material'
import React from 'react'

const CustomTextField = ({ required, name, label, value, onChange, width ,style}) => {
    return (
        <TextField
            required
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            style={width ? { width: width } : ''}
            sx={style && {style}}
        />
    )
}

export default CustomTextField