import React from "react";
import useWindowWidth from "./windowSizeHook";

const WindowSizeComponet = () => {
    const width = useWindowWidth();

    return (
        <div className="window-container">
            <div className="child-container">{width}</div>
        </div>
    )

}


export default WindowSizeComponet;

