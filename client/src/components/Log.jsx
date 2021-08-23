import { getByDisplayValue } from "@testing-library/react";
import { Route } from "react-router-dom";

function Log(props) {

const {fields} = props.bill.fields
console.log(fields)

  return(
    <>
    <h1>Expense Log Here!</h1>
      <h2>{fields}</h2>


      </>
  )
}

export default Log