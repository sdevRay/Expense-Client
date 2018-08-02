import React from "react"
import ExpensesIndex from "../content/ExpensesIndex"

const Splash = (props) => {
    return(
        <div>
            <ExpensesIndex setTokenFromSplash={props.setTokenFromApp} setTotalCostFromSplash={props.setTotalCostFromApp} />
        </div>
    )
}

export default Splash