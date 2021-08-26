import { Pie } from "react-chartjs-2"

function Chart(props) {

  console.log(props.bills)
  const billObj = props.bills.map((bill) => bill.fields)
  

  const filteredBills = billObj.filter((bill) => bill.amount > 0)
  const billName = filteredBills.map((bill) => bill.name)
 

  const billAmount = billObj.map((bill) => parseInt(bill.amount))
  






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