import { useState } from "react"


function Calculate(props) {

  const [total, setTotal] = useState(0.00)


  const handleTotal = (event) => {
    event.preventDefault()

    const numArray = props.bills.map((bill) => Number(bill.fields.amount))


    const totalExpenses = numArray.reduce((acc, curr) => acc += curr)
    setTotal(totalExpenses)



  }


  return (
    <>
      <div className="expense-label">
  
   </div>
      <div id="total">
        <button id="calculate"
          onClick={handleTotal}
        >Calculate Expenses</button>
        {total !== 0.00 ? <h1>$ {total}</h1> : <></>}
      </div>
    </>
  )
}

export default Calculate