import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import { tasksContext } from '../contexts/tasks-context';

function Task({task}) {
  const {DeleteTask} = useContext(tasksContext);
  // handle delete 
  const deleteTask = () =>{
    DeleteTask({taskId: task.taskId});
    // console.log(task.taskId)
  }
  return (
        <div className="card  flex justify-between items-center">
        <div>
        <Link to={`/task/${task.taskId}`} className="font-bold text-2xl">{task.taskName}</Link>
        
        <p>Description: {task.description}</p>
        </div>
        <div className="text-white font-bold">
            <i className="fa fa-pencil bg-green-500 p-3 rounded-full mx-2"></i>
            <i className="fa fa-trash bg-red-500 p-3 rounded-full"
            onClick={deleteTask}
            ></i>
        </div>
        </div>
    
  )
}

export default Task;