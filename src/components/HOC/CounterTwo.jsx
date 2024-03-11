import React from "react";
import withCounter from "./HOCCounter";

const CounterTwo = ({ count, increment }) => {


    return (
        <div>
            <p style={{ textAlign: "center" }}>Counter: {count}</p>
            <button onClick={increment}>Increment by 4</button>
        </div>
    )

}


const WithCounter = withCounter(CounterTwo, 4);
export default WithCounter;