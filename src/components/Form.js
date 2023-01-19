import React, { useRef } from "react";


const Form = ({ name, setName,radio, setRadio ,attendance, setAttendance }) => {
    
    const formRef =useRef();
    const handleNameChange = (evt) => {
        setName(evt.target.value)
    }
    const handleRadioClick = (evt) => {
        setRadio(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setAttendance([...attendance,{name:name,attending:radio, id:Math.floor(Math.random() *100) }])
        setName("");
        setRadio("")
        formRef.current.reset();
    }
    

    return(
        
    <form 
    onSubmit={handleSubmit}
    ref={formRef} >
        <fieldset>
            <legend>ここで入力</legend>
            <label for="fullName">
                名前 </label>
            <input 
                onChange={handleNameChange}
                type="text" 
                name="fullName" 
                value= {name}
                required />
            <h3>出席する？しない？</h3>
            <div onChange={handleRadioClick}>

            <label for= "yes">はい</label>
                <input 
                 name="option-input"
                 id="yes"
                 type="radio" 
                 value="optionYes"
                 required />
           <label for= "no">いいえ</label>
                <input
                name="option-input"
                id="no"
                type="radio" 
                value="optionNo"
                />
                <br/>
            </div>
            <input
            value="Submit"
            type="submit"
            onClick={handleSubmit}
            />
        </fieldset>
    </form>
    

    )
}

export default Form;