import User from './User';
import './UsersList.css';

const UsersList = props => {
    return <div className='usersList'>{props.usersArray.map(user => <User key={user.id} name={user.name} age={user.age} />)}
    </div>
}

export default UsersList;