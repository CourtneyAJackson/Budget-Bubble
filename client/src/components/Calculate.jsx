import Form from "./Form"
import {useState} from "react"

function Calculate(props) {

    const [total, setTotal] = useState(null)
    
   // const { amount} = props.bills
  
  console.log(props.bills.map((bill, index) => {
    return (
      bill.fields.amount
      //   .reduce((acc, curr) => {
      //   acc += curr
      // }) 
      
    )
  }))

  const handleTotal = async (event) => {
    event.preventDefault()
   
    //console.log(props.bills)


  }


  return (
    <>
      <form onTotal={handleTotal}>
      <h1>Calculate total</h1>
        {/* <h2>{props.amount}</h2> */}
        <button type="submit"
          onClick={e => setTotal(e.target.value)}
          value={total}
        >Calculate Expenses</button>
      </form>
      </>
  )
}

export default Calculate