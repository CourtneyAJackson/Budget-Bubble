import axios from "axios"
import {useState, useEffect} from "react"
import { Route,Link } from "react-router-dom"
import { baseURL, config } from "../services"
import Log from "./Log"






function Form(props) {

  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  

  
//console.log(props.bill)
const handleSubmit = async (event) => {
  event.preventDefault()
  
  const newBill = {
   
    amount,
  }
  await axios.post(baseURL, {fields: newBill}, config)
  console.log(newBill)
  }

  // const handleSelect = async (event) => {
  //   const newBill = {
  //     name,
      
  //   }
  //   await axios.post(baseURL, {fields: newBill}, config)
  //   console.log(newBill)
  //   }
  


  return (
    <>
      <form onSubmit={handleSubmit}>
      
      <h1>Form Page here!</h1>
    
      <label htmlFor="expenses category">Expenses Category: </label>
    {/* <form onSelect={handleSelect}> */}
      <select>
          <option value="rent/mortgagte" onSelect={e => setName(e.target.value)}>Rent/Mortgage</option>
        <option value="car note">Car Note</option>
        <option value="phone">Phone</option>
        <option value="food">Food</option>
        {/* <option value="create category">Create Category</option> */}
      </select>
  
      <br></br>
      <label htmlFor="amount">Amount: </label>
        <input type="text"
          id="amount"
          placeholder="Enter Amount Here"
          onChange={e => setAmount(e.target.value)}
          value={amount}
          
        />
    <br></br>
      <button type="submit">Add to Expenses Log</button>
        <br></br>
        
      <label htmlFor="dont see your expense?">Dont See Your Expense?</label>
      <Link to="/Create">Create One!</Link>
    
      <br></br>
        <label htmlFor="expenses log">Expenses Log:</label>

     
</form>
   
    </>
  )
}

export default Form