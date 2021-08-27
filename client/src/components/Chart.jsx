import { Pie } from "react-chartjs-2"

function Chart(props) {

  console.log(props.bills)
  const billObj = props.bills.map((bill) => bill.fields)


  const filteredBills = billObj.filter((bill) => bill.amount > 0)
  const billName = filteredBills.map((bill) => bill.name)


  const billAmount = billObj.map((bill) => parseInt(bill.amount))







  return (
    <>
      <div className="pie">
        <Pie
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
          width={"500%"}
          height={"500%"}
          options={{
            responsive: true,
                maintainAspectRatio: false
              }}

        ></Pie>
      </div>
    </>
  )
}

export default Chart