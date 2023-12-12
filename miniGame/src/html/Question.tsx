import { Checkbox } from '@mui/material'
import React from 'react'

export const  Question = () => {
    const check = ()=>{
    }
  return (
    <label className='question'>
        <Checkbox/>
        <p className='questionText'>HyperText Markup Language</p>
    </label>
  )
}
