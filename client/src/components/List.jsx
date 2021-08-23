import axios from "axios"
import {baseURL, config} from "../services"

function List(props) {
  
  const { name, amount } = props.bills.fields
  

  const handleDelete = async () => {
    await axios.delete(`${baseURL}/${props.bills.id}`, config)
  }


  return (
    <article>
      <h3>{name}</h3>
      <h3>{amount}</h3>
      <button onClick={handleDelete}>Delete Expense</button> 
    </article>
    
  )
}

export default List