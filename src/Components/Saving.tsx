import React, { useState, useEffect } from 'react'
import { SavingProps } from '../types/saving'
import "../styles/saving.css"
import AddTaskIcon from '@mui/icons-material/AddTask';
import { Box, TextField, Button, List, ListItem, styled } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux'
import { addExpense } from '../redux/reducers/expenses';


const Saving = ({ saving }: SavingProps) => {
  const [target, setTarget] = useState(0)
  const dispatch = useDispatch()
 {/*dispatch(addExpense())*/}
 useEffect(() => {
  dispatch(addExpense({
    title: "test",
    amount: 23,
    date: "test"
  }))
 }, [])

  const incomes = useSelector((state: any) => state.incomeReducer)
  const expenses = useSelector((state: any) => state.expenseReducer)
 console.log()

console.log("incomes state: ", incomes)
console.log("expense state: ", expenses)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault()
  }

useEffect(() => {
}, [])


  return (
      <Box
    component="form"
    autoComplete="off"
    onSubmit={(e)=>onSubmit(e)}
    sx={{display: "flex", flexDirection: "column",  gap: 0.5}}
    >
      <h4>Current saving: {saving}</h4>
      <h4>Current target: {target}</h4>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={saving/target*100} />
      
      <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(saving/target*100)}%`}</Typography>
        </Box>

      <TextField
          label= {`Set target`}
          variant="standard"
          onChange={(e)=>setTarget(Number(e.target.value))}
          type="number"
        />
  
    <Button 
        type='submit'
        variant="outlined"
        startIcon={<AddTaskIcon />}
        color="secondary"
        size="small"
        className="save-btn"
     
        >Set target</Button>
  </Box>
  
  )
}

export default Saving