import { Link } from "react-router-dom"
import Log from "./Log"

function Create(props) {




  
  return (
    <>
    <h1>Add new category here</h1>
      <label htmlFor="name of expense">Name of Expense:</label>
      <input id="new expense"
        type="text"
        placeholder="Name"
      />
      <br></br>
      <label htmlFor="amount of expense">Amount of Expense:</label>
      <input id="new amount"
        type="text"
        placeholder="$.$$"
      />
      <Link to="/new">Add New Expense</Link>
     
    </>
  )
}

export default Create