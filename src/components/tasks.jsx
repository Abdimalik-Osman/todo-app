import React,{useContext} from 'react'
import {tasksContext} from '../contexts/tasks-context';
import { userContext } from '../contexts/user-context';
import Task from './task';
function Tasks() {
    const {tasks} = useContext(tasksContext);
    const {currentUser} = useContext(userContext);
    const userTasks = tasks.filter(task => task.user === currentUser);
    // console.log(userTasks);
  return (
    <div className=" grid gap-4 grid-cols-3 sm:grid-cols-12 md:grid-cols-6 mx-20 ">
      {tasks.length > 0 && userTasks.map(task => (
                <Task key={task.taskId} task={task}/>
      ))}
    </div>
  )
}

export default Tasks
