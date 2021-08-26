import { Pie } from "react-chartjs-2"
import { useEffect, useState } from "react"
import axios from "axios"
import { baseURL, config } from "../services"

function Chart(props) {

  console.log(props.bills)
  const billObj = props.bills.map((bill) => bill.fields)
  console.log(billObj)

  const filteredBills = billObj.filter((bill) => bill.amount > 0)
  const billName = filteredBills.map((bill) => bill.name)
  console.log(billName)

  const billAmount = billObj.map((bill) => parseInt(bill.amount))
  console.log(billAmount)






  return (
    <>
      <Pie id="pie"
        data={{
          labels: billName,
          datasets: [{
            data: billAmount,
            backgroundColor: [
              "orangered",
              "purple", "green",
              "yellow", "blue", "gold"
            ],
          
          }]
        }}

      ></Pie>

    </>
  )
}

export default Chart