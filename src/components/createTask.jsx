import React,{useContext, useState} from 'react'
import {tasksContext} from '../contexts/tasks-context';
import { userContext } from '../contexts/user-context';
function TodoList() {
  const [taskName,setTaskName] = useState('');
  const [description,setDescription] = useState('');
  const taskId = new Date().getTime()
  const {AddTask} = useContext(tasksContext);
  const {currentUser} = useContext(userContext);
  const user = currentUser;
  // handle submit
  const handleSubmit = (e) =>{
    e.preventDefault();
    
    const newTask = {taskName,description,taskId, user};
    AddTask(newTask);
  }
  return (
    <div className="bg-black shadow-2xl w-1/2 mx-auto my-5 py-2 text-white ">
    <h1 className="font-bold text-3xl text-center">TODO LIST APP</h1>
  <form className="px-20" >
    <label className="">
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium  text-white">
        Task
      </span>
      <input
        type="text"
        name="taskName"
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block text-black w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="Enter your task name"
        onChange={(e)=>setTaskName(e.target.value)}
      />
    </label>
    <label className="">
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium  text-white">
        Description
      </span>
      <textarea 
        name="task"
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block text-black w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="Description"
        onChange={(e)=> setDescription(e.target.value)}
      />
    </label>
    <button 
    onClick={handleSubmit}
     className="bg-sky-700/100  text-white rounded-full font-bold px-10 py-3 my-4 ">SAVE</button>
  </form>
</div>
  )
}

export default TodoList
