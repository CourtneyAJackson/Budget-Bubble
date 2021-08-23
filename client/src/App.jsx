import{Route, Link} from "react-router-dom"
import './App.css';
import Form from "./components/Form"
import { useState, useEffect } from "react"
import axios from "axios"
import { baseURL, config } from "./services"
import Create from "./components/Create"
import Log from "./components/Log"


function App() {

  const [bills, setBills] = useState([])

 
  // const handleSubmit
  //event.preventDefault()
    useEffect(() => {
      const getBills = async (event) => {
     
      const res = await axios.get(baseURL, config)
      //console.log(res.data.records)
      setBills(res.data.records)
      }
     getBills()
},[])
  
 console.log(bills)




  return (
    <>
        <Route path="/" exact>
            
        
           {/* <form onSubmit={handleSubmit}> */}
        <h1>Budget Buddy</h1>
        <h2>The Budgeting App You Can Count On!</h2>
        
          
          <button type="submit" onChange={e => setBills(e.target.value)}>
          <Link to="/new">Start Budgeting!</Link>
          </button>
        {/* </form> */}
    </Route>
      
      <Route path="/new">
        {
          bills.map((bill, index) => {
            
            return (
              <>
                <h3>Name: {bill.fields.name}</h3>
              <h3>Amount: {bill.fields.amount}</h3>
              </>
            )
          })
        }
        
          
              <>
                <Form bills={bills} />
          
                </>
           
           
      
      
      </Route>
      
      <Route path="/Create">
        <Create />
        
      </Route>
   
      </>
      );
}

export default App;
