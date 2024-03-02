import React, { useRef, useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState(10);

    let intervalId = useRef(null);




    const startCounter = () => {
        intervalId.current = setInterval(() => {
            setCounter((prev) => {
                if (prev == 0) {
                    clearInterval(intervalId.current);
                    return 0
                }
                return prev - 1
            })
        }, 1000);
    }

    const pauseCounter = () => {
        clearInterval(intervalId.current);
    }

    const resetCounter = () => {
        clearInterval(intervalId.current);
        setCounter(10)
    }

    return (
        <div>
            <p>counter:  {counter}</p>

            <button onClick={startCounter}>Start</button>
            <button onClick={pauseCounter}>Pause</button>
            <button onClick={resetCounter}>Reset</button>

        </div>
    )

}


export default Counter;