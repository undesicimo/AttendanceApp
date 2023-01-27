import React from "react";
import Students from "./Students";

const AttendanceList = ({attendance,radio}) => {
    return(
       <ul>
            {attendance.map( attendance => (
                <Students 
                name={attendance.name}
                attending={attendance.attending}
                key = {attendance.id}
                    
                />
            ) )}
       </ul>

    )
}

export default AttendanceList;