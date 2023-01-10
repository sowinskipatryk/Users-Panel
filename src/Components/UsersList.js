import User from './User';

const UsersList = props => {
    return <div>{props.UsersArray.map(user => <User name={user.name} age={user.age} />)}
    </div>
}

export default UsersList;