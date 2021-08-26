import { Route, Link } from "react-router-dom"
import './App.css';
import Form from "./components/Form"
import { useState, useEffect } from "react"
import axios from "axios"
import { baseURL, config } from "./services"
import Create from "./components/Create"
import List from "./components/List"
import Calculate from "./components/Calculate";
import Chart from "./components/Chart"
import { Pie } from "react-chartjs-2"


function App() {

  const [bills, setBills] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
  

  // const handleSubmit
  //event.preventDefault()
  useEffect(() => {
    const getBills = async (event) => {

      const res = await axios.get(baseURL, config)
      //console.log(res.data.records)
      setBills(res.data.records)
    }
    getBills()
  }, [toggleFetch])

  
  console.log(bills)


  return (
    <>
      <Route path="/" exact>
        <div className="title">
        <h1>Budget Bubble!</h1>
        <h2>""</h2>
        </div>

        <button id="home-button" type="submit" onChange={e => setBills(e.target.value)}>
          <Link to="/new">Start Budgeting!</Link>
        </button>
      
          <div>
        <ul class="float">
            <li><span>$</span></li>
            <li><span>$</span></li>
            <li><span>$</span></li>
            <li><span>$</span></li>
            <li><span>$</span></li>
            <li><span>$</span></li>
            <li><span>$</span></li>
            <li><span>$</span></li>
            <li><span>$</span></li>
            <li><span>$</span></li>
        </ul>
  </div>

      </Route>

      <Route path="/new">
         <Form bills={ bills} setToggleFetch={setToggleFetch} />
        {
          bills.map((bill, index) => {
          // <button onClick={NaN} >Delete Expense</button>
            
            return (
              <>
                {bill.fields.amount !== "0" ? <List setToggleFetch={setToggleFetch} toggleFetch={ toggleFetch}bill={bill}/> : <></>}
               
              </>
            )
          })
          
        }
       {/* <h3>Name: {bill.fields.name}    Amount: ${bill.fields.amount}</h3> */}
        <>


        </>


        <Calculate bills={bills} />
      
        <Chart bills={bills} />
       

      </Route>

      <Route path="/Create">
        <Create setToggleFetch={setToggleFetch} toggleFetch={ toggleFetch}/>

      </Route>

    </>
  );
}

export default App;
