import Form from "./Form"
import { useState } from "react"
import Chart from "./Chart"

function Calculate(props) {

  const [total, setTotal] = useState(0.00)
  // const [difference, setDifference] = useState(null)


  const handleTotal = (event) => {
    event.preventDefault()

    const numArray = props.bills.map((bill) => Number(bill.fields.amount))


    const totalExpenses = numArray.reduce((acc, curr) => acc += curr)
    setTotal(totalExpenses)
    console.log(total)


  }


  return (
    <>
      
        
        <button id="calculate"
          onClick={handleTotal}
        >Calculate Expenses</button>
       <div id="total"> {total !== 0.00 ? <h1>${total}</h1> : <></>}
      </div>
    </>
  )
}

export default Calculate