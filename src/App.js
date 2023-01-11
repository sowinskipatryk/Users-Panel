import { useState } from 'react';
import './App.css';
import ErrorDialog from './Components/ErrorDialog';
import UserForm from './Components/UserForm';
import UsersList from './Components/UsersList';

const INITIAL_USERS = [
  {'id': 1, 'name': 'Patryk', age:27},
  {'id': 2, 'name': 'Max', age: 31},
  {'id': 3, 'name': 'Bob', age:44}
]

function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const [users, setUsers] = useState(INITIAL_USERS);
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <UserForm usersArray={users} addUser={setUsers} isOpenWindow={openDialog} setOpenWindow={setOpenDialog} setErrorMessage={setMessage} />
        <UsersList usersArray={users} />
        <ErrorDialog openWindow={openDialog} setOpenWindow={setOpenDialog} msg={message}/>
      </header>
    </div>
  );
}

export default App;
