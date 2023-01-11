const FormInput = (props) => {
    
    const valueChangeHandler = (event) => {
        props.setValue(event.target.value);
    };

    return <div><label>{props.name}: <input type={props.type} value={props.value} onChange={valueChangeHandler}></input></label></div>
}

export default FormInput;