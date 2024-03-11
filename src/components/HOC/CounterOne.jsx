import React from "react";
import withCounter from "./HOCCounter";

const CounterOne = ({ count, increment }) => {

    return (
        <div>
            <p style={{ textAlign: "center" }}>Counter: {count}</p>
            <button onClick={increment}>Increment by 2</button>
        </div>
    )
}

const WithCounter = withCounter(CounterOne,2);

export default WithCounter;


