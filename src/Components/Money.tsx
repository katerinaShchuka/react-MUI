import { ClientRequest } from 'http'
import React, { useState } from 'react'
import { MoneyProps } from '../types/money'
import { Box, TextField, Button, List, ListItem, styled } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';

import "../styles/money.css"
import MoneyTable from './MoneyTable';

const Money = ({option, list, setList}: MoneyProps) => {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState("")
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
        setList([{amount, date, title, id: Date.now() }, ...list])
    }

    const MoneyList = styled(List)({
            backgroundColor: "azure",
    })
   
  return (
    <Box
    component="form"
    autoComplete="off"
    onSubmit={(e)=>onSubmit(e)}
    sx={{display: "flex", flexDirection: "column",  gap: 2}}
    >
        <TextField
        required
          label= {`${option} Source`}
          variant="standard"
          onChange={(e)=> setTitle(e.target.value)}
          value={title}
          type="text"
        />
        <TextField
        required
          label= {`Amount of ${option}`}
          variant="filled"
          onChange={(e) => setAmount(Number(e.target.value))}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
        required
          label= {`Date of ${option}`}
          variant="filled"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button 
        type='submit'
        variant="outlined"
        startIcon={<AddCircleIcon />}
        color="secondary"
        size="small"
        className="save-btn"
     
        >Save</Button>
        {/* <MoneyList sx={{ maxHeight: 200, backgroundColor: "wheat", overflow: "scroll" }}>
    {
        list.length > 0 && list.map(
            item => (
                <ListItem key={item.id}> {item.title} , {item.amount} , {item.date}</ListItem>
            )
        ) 
    }
        </MoneyList> */}
        <MoneyTable list={list} />
    </Box>
  )
}

export default Money