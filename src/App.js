import { useState } from 'react';
import './App.css';
import ErrorDialog from './Components/ErrorDialog';
import NewUser from './Components/NewUser';
import UsersList from './Components/UsersList';

const INITIAL_USERS = [
  {'name': 'Patryk', age:27},
  {'name': 'Max', age: 31},
  {'name': 'Bob', age:44}
]

function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const [users, setUsers] = useState(INITIAL_USERS);
  return (
    <div className="App">
      <header className="App-header">
        <NewUser addUser={setUsers} isErrorWindow={setOpenDialog} />
        <UsersList usersArray={users} />
        {openDialog && <ErrorDialog />}
      </header>
    </div>
  );
}

export default App;
