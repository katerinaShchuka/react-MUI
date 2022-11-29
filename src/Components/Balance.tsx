import React, { useState } from 'react'
import '../styles/balance.css'
import { BalanceProps } from '../types/balance'
import AddTaskIcon from '@mui/icons-material/AddTask';
import { Box, TextField, Button, List, ListItem, styled } from '@mui/material'

const Balance = ({ balance, setSaving}: BalanceProps) => {
  const [amount, setAmount] = useState(0)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault()
setSaving((saving) => saving + amount)

  }
  return (
    <Box
    component="form"
    autoComplete="off"
    onSubmit={(e)=>onSubmit(e)}
    sx={{display: "flex", flexDirection: "column",  gap: 2}}
    id="balance"
    >
      <h4>Current balance {balance}</h4>
      <TextField
          label= {`Add to saving account`}
          variant="standard"
          onChange= {(e) => setAmount(Number(e.target.value))}
          type="number"
        />
    <Button 
        type='submit'
        variant="outlined"
        startIcon={<AddTaskIcon />}
        color="secondary"
        size="small"
        className="save-btn"
     
        >Transfer</Button>
    </Box>
  )
}

export default Balance