import './User.css';

const User = props => {
    return <div className='user-div'>
        <p className="user-p">{`${props.name} (${props.age} years old)`}</p>
    </div>
}

export default User;