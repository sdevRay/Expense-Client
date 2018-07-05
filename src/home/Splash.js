import React from "react"
import ExpensesIndex from "../content/ExpensesIndex"

const Splash = (props) => {
    // props.setTotalCost("hi")
    return(
        <div>
            <ExpensesIndex setTokenFromSplash={props.setTokenFromApp} setTotalCost={props.setTotalCost}/>
        </div>
    )
}

export default Splash