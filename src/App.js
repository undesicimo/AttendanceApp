import React, { useState } from "react";
import AttendanceList from "./components/AttendaceList";
import Form from "./components/Form"
import Clock from "./components/Clock";


const App = () =>{
    const [name,setName] = useState("");
    const [radio,setRadio] = useState("");
    const [attendance, setAttendance] = useState([]);

    
    return(
        <div>
            <div>
            <h1>出席表</h1>
            <Clock />    
            </div>
            <Form 
                name = {name}
                setName = {setName} 
                radio = {radio}
                setRadio = {setRadio}
                setAttendance ={setAttendance} 
                attendance = {attendance}
                />
            <h2>今日の出席者</h2>
            <AttendanceList 
                name = {name}
                radio = {radio}
                attendance ={attendance}
            />
        </div>
    )


}

export default App;