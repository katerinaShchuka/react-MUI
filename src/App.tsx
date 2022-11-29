import React, { createContext, Dispatch, useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';


import './App.css';
import Money from './Components/Money';
import Saving from './Components/Saving';
import Balance from './Components/Balance';
import { MoneyItem } from './types/money';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserFormData } from './types/form';
import { userSchema } from './schema/userForm';
import { ThemeProvider, createTheme } from '@mui/material'
import { blue, purple } from '@mui/material/colors';
import { Box, TextField, Button } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';


 export const ThemeContext = createContext({
  toggleMode: () => {}
}) 

function App() {
  
 const { register, handleSubmit, reset } = useForm<UserFormData>({
resolver: yupResolver(userSchema)

 })
 

  const [incomes, setIncomes] = useState<MoneyItem[]>([]);
  const [expenses, setExpenses] = useState<MoneyItem[]>([]);
  const [saving, setSaving] = useState(0)
  const [balance, setBalance] = useState(0)
  const totalIncome = incomes.reduce((prev, current) => prev+current.amount, 0)
  const totalExpense = expenses.reduce((prev, current) => prev+current.amount, 0)
  useEffect(() => {
    setBalance(totalIncome - totalExpense - saving)
  }, [incomes, expenses, saving])

  const onSubmit: SubmitHandler<UserFormData> = (data) => {

console.log(data)
reset({})
  }

 let inputRef: HTMLInputElement | null = null

 const theme = createTheme({

  palette: {
    primary:{
      main: purple[400],
    },
    secondary: {
      main: blue[700],
    }
  }});

  return (
   <ThemeProvider theme = {theme}>
    
      <div className="App">
        <Money option='Income' list={incomes} setList={setIncomes}/>
        <Money option='Expense' list={expenses} setList={setExpenses}/>
        <Saving saving={saving}/>
      </div>
      <div>
        <Balance balance={balance} setSaving={setSaving}/>
      </div>
   

<form onSubmit={handleSubmit(onSubmit)} id="form2">

  <TextField
  required
          label= {`Enter your first name`}
          variant="standard"
          {...register("firstname")}
          type="text"
        />
  <TextField
        required
          label= {`Enter your last name`}
          variant="standard"
          {...register("lastname")}
          type="text"
        />
    <TextField
        required
          label= {`Enter your email`}
          variant="standard"
          {...register("email")}
          type="email"
        />
  <TextField
        required
          label= {`Enter your password`}
          variant="standard"
          {...register("password")}
          type="password"
        />
  <TextField
        required
          label= {`Confirm your password`}
          variant="standard"
          {...register("re_password")}
          type="password"
        />
  <div>
   <select id="gender" {...register("gender")} >
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="others">Others</option>
   </select>
  </div>

<div>
  <label htmlFor="subscribe">Do you want to subscribe?</label>
  <input type="checkbox" id="subscribe" {...register("subscribe")} />
</div>

<Button 
        type='submit'
        variant="outlined"
        startIcon={<AddCircleIcon />}
        color="secondary"
        size="medium"
        className="save-btn"
        >Save data</Button>
</form>
</ThemeProvider>
)
  }


export default App;
