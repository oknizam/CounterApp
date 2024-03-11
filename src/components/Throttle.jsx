import React, { useEffect } from "react";

const ThrottleComponent = () => {

    useEffect(() => {

        window.addEventListener("mousemove", throttle(handleMouse,5000))

        return () => {
            window.removeEventListener("mousemove", handleMouse)
        }
    }, []);

    const handleMouse=(e)=>{
        console.log("mouse event",e)
    }




    const throttle = (fn, delay) => {
        let run = false;

        return function (...args) {
            if (!run) {
                fn();
                run = true;

                setTimeout(() => run = false, delay)

            }
        }

    }




    return (
        <div className="throttle-container">

            <p>Throttle</p>

        </div>
    )

};


export default ThrottleComponent;