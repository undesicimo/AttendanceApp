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
            <div className="nameInput">
                <label for="fullName">
                    名前 </label>
                <input 
                    onChange={handleNameChange}
                    data-testid="nameInput"
                    type="text" 
                    name="fullName" 
                    value= {name}
                    required />
            </div>
            <div className="attendanceInput">
                <h3>出席する？しない？</h3>
                <div onChange={handleRadioClick}>
                    <label for= "yes">はい</label>
                        <input 
                        name="option-input"
                        id="yes"
                        type="radio" 
                        value="optionYes"
                        checked={radio ==='optionYes'}
                         />
                    <label for= "no">いいえ</label>
                        <input
                        name="option-input"
                        id="no"
                        type="radio" 
                        value="optionNo"
                        checked={radio === 'optionNo'}
                        />
                </div>
            </div>
            
            <div className="submitButtonDiv">
                <input
                    data-testid="submitButton"
                    value="送信"
                    type="submit"
                    onClick={handleSubmit}
                    />
            </div>
                
        </fieldset>
    </form>
    

    )
}

export default Form;