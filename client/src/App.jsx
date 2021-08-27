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
import Footer from "./components/Footer";


function App() {

  const [bills, setBills] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)


  useEffect(() => {
    const getBills = async (event) => {

      const res = await axios.get(baseURL, config)

      setBills(res.data.records)
    }
    getBills()
  }, [toggleFetch])



  return (
    <>
      <Route path="/" exact>
        <div className="title">
          <h1>Budget Bubble</h1>
          <h3>"Track Your Bills The Easy Way!"</h3>
          <button id="home-button" type="submit" onChange={e => setBills(e.target.value)}>
            <Link to="/new" className="link">Start Budgeting!</Link>
            </button>
          </div>
        
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
    
    <div className="dashboard-container">
      <Route path="/new">
        <Form bills={bills} setToggleFetch={setToggleFetch} />
        {
          bills.map((bill, index) => {

            return (
              <>
                {bill.fields.amount !== "0" ? <List setToggleFetch={setToggleFetch} toggleFetch={toggleFetch} bill={bill} /> : <></>}

              </>
            )
          })

        }
 

        <Calculate bills={bills} />

        <Chart bills={bills} />
    {/* <Footer/> */}
        {/* <h4>Budget Buddy Inc | 2021 | <Link to="/">Contact Us</Link></h4> */}
      </Route>

      <Route path="/Create">
        <Create setToggleFetch={setToggleFetch} toggleFetch={toggleFetch} />

        </Route>
     
</div>
    </>
  );
}

export default App;
