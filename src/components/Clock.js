import React, { useState, useEffect } from "react";

const Clock = () => {
    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClock(date.toLocaleTimeString());
        }, 1000);
    },[]);
    
    return(
        <div>
            <h2>{clock}</h2>
        </div>
    )
}


export default Clock;