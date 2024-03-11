import React, { useState } from "react";


const DebounceComponent=()=>{

    const [searchValue,setSearchValue]= useState("");


    const onChangeText=(e)=>{
        setSearchValue(e.target.value)
    }

    const debounce=(fn,delay)=>{
        let timer;

        return function(...args){
            clearTimeout(timer)
            setTimeout(()=>{
                fn(...args)
            },delay)
        }
    }


    return(
        <div className="container-debounce">
            <label>Please enter text</label>
            <input type="text"  onChange={debounce(onChangeText,1000)} value={searchValue}/>
        </div>
    )




}

export default DebounceComponent;