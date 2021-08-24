import axios from "axios"
import { baseURL, config } from "../services"
import {useParams} from "react-router-dom"

function List(props) {
  const {id} = props.bill
  const { name, amount } = props.bill.fields
  const {setToggleFetch, toggleFetch} = props
  // const params = useParams()
  
  // const findBill = props.bills.find(bill => params.id === bill.id)

  const handleDelete = async (e) => {
    e.preventDefault()
    await axios.delete(`${baseURL}/${id}`, config)
    setToggleFetch(!toggleFetch)
  }


  return (
    <article>
      <h3>Name: {name}</h3>
      <h3>Amount: {amount}</h3>
      <button onClick={handleDelete}>Delete Expense</button> 
    </article>
     
    
  )

 
}

export default List