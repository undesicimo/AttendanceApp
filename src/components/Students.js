import React from "react";

const Students = ({name, attending}) => {

    
    
    return(
        
        <li>
        {name}
        {attending === 'optionNo' && attending !== undefined ? "は欠席":""} 
        {attending === 'optionYes' && attending !== undefined ? "は出席":""}
        </li>
    )
}

export default Students; 