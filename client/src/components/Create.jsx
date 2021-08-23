import { Link } from "react-router-dom"
import Log from "./Log"
import { useState } from "react"
import axios from "axios"
import {baseURL, config} from "../services"

function Create(props) {

  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")


  const handleSubmit = async (event) => {
    event.preventDefault()

    const newBill = {
      name,
      amount,
    }
    await axios.post(baseURL, { fields: newBill }, config)
    console.log(newBill)
    //setToggleFetch(!toggleFetch)
  }






return (
  <>
    <form onSubmit={handleSubmit}>
      <h1>Add new category here</h1>
      <label htmlFor="name of expense">Name of Expense:</label>
      <input id="new expense"
        type="text"
        placeholder="Name"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <br></br>
      <label htmlFor="amount of expense">Amount of Expense:</label>
      <input id="new amount"
        type="text"
        placeholder="$.$$"
        onChange={e => setAmount(e.target.value)}
        value={amount}
      />
      <button type="submit"><Link to="/new">Add New Expense</Link></button>
    </form>
  </>
)
}

export default Create