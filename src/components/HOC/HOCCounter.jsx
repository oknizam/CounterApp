import React, { useState } from "react";


const withCounter = (Wrapper, val) => {
    const Counter = (props) => {
        const [count, setCount] = useState(0);
        return (
            <Wrapper count={count} increment={() => setCount((prev)=>prev+val)} {...props}/>
        )
    }
    return Counter;

}

export default withCounter;