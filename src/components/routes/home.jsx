import React,{useContext} from 'react'
import Login from '../login';
import CreateTask from '../createTask';
import Tasks from '../tasks';
import Header from '../header';
import {userContext} from '../../contexts/user-context';
function Home() {
    const {currentUser} = useContext(userContext);
    if(!currentUser) return <Login />
  return (
    <div>
        <Header />
        <CreateTask />
        <Tasks />
    </div>
  )
}

export default Home