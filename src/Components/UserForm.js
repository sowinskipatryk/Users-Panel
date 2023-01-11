import React, { useState } from 'react';
import FormInput from "./FormInput";
import './UserForm.css';

const UserForm = props => {
    
    const [nameValue, setNameValue] = useState("");
    const [ageValue, setAgeValue] = useState("");

    const addUserHandler = (user) => {
        props.addUser((prevUsers) => {
            return [user, ...prevUsers]
        });
    }

    const submitDataHandler = event => {
        event.preventDefault();
        if (nameValue === "" | ageValue === "") {
            props.setErrorMessage("The name/age entered is incorrect!");
            props.setOpenWindow(true);
        }
        else if (ageValue < 1 | ageValue > 125) {
            props.setErrorMessage("The age entered is incorrect!");
            props.setOpenWindow(true);
        }
        else {
            const nameCapital = nameValue.charAt(0).toUpperCase() + nameValue.slice(1);
            const newUser = {'id': Math.random(),'name': nameCapital, 'age': ageValue}
            addUserHandler(newUser);
            setNameValue("");
            setAgeValue("");
        }
    }


    return <div className="form-div">
        <form onSubmit={submitDataHandler}>
        <FormInput type="text" name="Username" setValue={setNameValue} value={nameValue} isOpenModal={props.isOpenWindow} setOpenModal={props.setOpenWindow} />
        <FormInput type="number" name="Age" setValue={setAgeValue} value={ageValue} />
        <button className='form-button__submit' type="submit">Add User</button>
    </form>
    </div>
}

export default UserForm;