import React, { useEffect, useState } from "react";

const WindowSize = () => {
    const [witdh, setWitdh] = useState(0);

    useEffect(() => {
        const handleSize = () => {
            setWitdh(window.innerWidth);
        }
        window.addEventListener("resize", handleSize);
        return function () {
            window.removeEventListener("resize", handleSize)
        }
    }, []);


    return witdh;

}

export default WindowSize;