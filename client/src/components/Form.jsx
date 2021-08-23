import axios from "axios"
import {useState, useEffect} from "react"
import { Route,Link } from "react-router-dom"
import { baseURL, config } from "../services"
import Create from "./Create"
import Log from "./Log"






function Form(props) {

  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
 const [toggleFetch, setToggleFetch] = useState(false)
  

  
//console.log(props.bill)
const handleSubmit = async (event) => {
  event.preventDefault()
  
  const newBill = {
    name,
    amount,
  }
  await axios.post(baseURL, {fields: newBill}, config)
  console.log(newBill)
  props.setToggleFetch(prevToggleFetch => !prevToggleFetch)
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
        <select value={name} onChange={e => setName(e.target.value)}>
          <option value="rent/mortgagte" selected  >Rent/Mortgage</option>
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