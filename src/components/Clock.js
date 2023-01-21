import React, { useState, useEffect } from "react";

const Clock = () => {
    const [clock, setClock] = useState(new Date());
    const refreshClock = () => {
        setClock(new Date());
    }


    useEffect(() => {
       const timer = setInterval(refreshClock,1000);
        return function cleanup(){
            clearInterval(timer);
        }
    },[]);
    
    return(
        <div>
            <h2>{clock.toLocaleTimeString('en-US', {hour12: false})}</h2>
        </div>
    )
}


export default Clock;