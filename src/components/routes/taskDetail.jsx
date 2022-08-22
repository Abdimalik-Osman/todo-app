import React, {useContext} from 'react'
import {useParams} from 'react-router-dom';
import { tasksContext } from '../../contexts/tasks-context';
function TaskDetail() {
  const {id} = useParams();
  const {tasks} = useContext(tasksContext);
  const task = tasks.filter(tsk => tsk.taskId === parseInt(id));
  console.log(task)
  return (
    <div className="bg-black text-white  w-2/4 mx-auto my-20 py-20 flex justify-between ">
    <div className="flex justify-between items-center space-x-10">
    <h1 className="font-bold text-3xl">Task Name: {task[0].taskName}</h1>p
    <p className='text-3xl my-3'>Description: {task[0].description}</p>
    <p className='text-2xl'>Creator: {task[0].user}</p>
    </div>
    
    </div>

  )
}

export default TaskDetail
