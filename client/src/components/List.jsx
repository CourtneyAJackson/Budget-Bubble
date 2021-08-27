import axios from "axios"
import { baseURL, config } from "../services"


function List(props) {
  const { id } = props.bill
  const { name, amount } = props.bill.fields
  const { setToggleFetch, toggleFetch } = props



  const handleDelete = async (e) => {
    e.preventDefault()
    await axios.delete(`${baseURL}/${id}`, config)
    setToggleFetch(!toggleFetch)
  }


  return ( 
  <>
  
    <div class="log">
      <h3>Name: {name}</h3>
      <h3>Amount: {amount}</h3>
      <button onClick={handleDelete}>Delete Expense</button>
    </div>
</>

  )


}

export default List