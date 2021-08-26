import { Link } from "react"

function Footer(props) {

  const message = <h1>Budget Buddy Inc | 2021 | <Link to="/">Contact Us</Link></h1>
  return (
    
    <h1>{ message}</h1>
    )
}
export default Footer 