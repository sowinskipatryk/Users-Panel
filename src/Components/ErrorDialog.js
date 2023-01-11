import './ErrorDialog.css';

const ErrorDialog = props => {
    
    const windowCloseHandler = () => {
        props.setOpenWindow(false);
    }
    
    return !props.openWindow ? "" : <div className="modal"><div className='modal-content'>
        <button className="error-button__close" type="button" onClick={windowCloseHandler}>X</button>
        <p>{props.msg}</p>
        </div></div>
}

export default ErrorDialog;