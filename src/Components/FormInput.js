import './FormInput.css';

const FormInput = (props) => {
    
    const valueChangeHandler = (event) => {
        props.setValue(event.target.value);
    };

    return <div className="input-container"><label htmlFor={props.name} className="form-label">{props.name}</label><input id={props.name} className="form-input" type={props.type} value={props.value} onChange={valueChangeHandler}></input></div>
}

export default FormInput;