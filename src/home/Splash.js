import React from "react"
import ExpensesIndex from "../content/ExpensesIndex"

const Splash = (props) => {
    return(
        <div>
            <ExpensesIndex setTokenFromSplash={props.setTokenFromApp}/>
        </div>
    )
}

export default Splash