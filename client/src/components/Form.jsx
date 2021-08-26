import axios from "axios"
import { useState, useEffect } from "react"
import { Route, Link } from "react-router-dom"
import { baseURL, config } from "../services"




function Form(props) {

  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [toggleFetch, setToggleFetch] = useState(false)


  const handleSubmit = async (event) => {
    event.preventDefault()

    const newBill = {
      name,
      amount,
    }
    await axios.post(baseURL, { fields: newBill }, config)

    props.setToggleFetch(prevToggleFetch => !prevToggleFetch)
    console.log(newBill)
  }
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="card">
          <h1 id="dashboard">Budget Bubble</h1>
        </div>
        <div class="expenses">
          <h2>Dashboard</h2>
          <br></br>
          <label htmlFor="expenses category">Expenses Category: </label>

          <select id="dropdown" value={name} onChange={e => setName(e.target.value)}>
            <option value="rent/mortgagte" selected  >Rent/Mortgage</option>
            <option value="car note">Car Note</option>
            <option value="phone">Phone</option>
            <option value="food">Food</option>

          </select>

          <br></br>
          <label htmlFor="amount">Amount: </label>
          <input id="input-amount" type="text"
            id="amount"
            placeholder="Enter Amount Here"
            onChange={e => setAmount(e.target.value)}
            value={amount}

          />
          <br></br>
          <button id="expenseLog" type="submit">Add to Expenses Log</button>
          <br></br>

          <label htmlFor="dont see your expense?">Dont See Your Expense?</label>
          <Link to="/Create">Create One!</Link>
        
        <br></br>
        <label htmlFor="expenses log">Expenses Log:</label>
      </div>



      </form>




    </>
  )
}

export default Form