import { createContext, useState, useReducer } from "react";

export const tasksContext = createContext({
    tasks: [],
    addTasks: ()=> null,
})

const INITIAL_STATE = {
    tasks: [],
}
export const TasksReducer = (state=INITIAL_STATE,action)=>{
    const {type,payload} = action;

    switch(type){
        case 'ADD_NEW_TASK':
            return{
                ...state,
                tasks: [payload,...state.tasks]
            }
        case 'DELETE_TASK':
            return{
                ...state,
                tasks: state.tasks.filter(task => task.taskId !== payload.taskId)
            }
        default:
            return state;
    }
}

export const TasksProvider = ({children})=>{
    const [{tasks},dispatch] = useReducer(TasksReducer, INITIAL_STATE);
    const AddTask = (task) => {
        dispatch({type: 'ADD_NEW_TASK', payload: task});
    }

    const DeleteTask = (taskId) => {
        dispatch({type: 'DELETE_TASK', payload:taskId});
    }

    const value = {tasks,AddTask,DeleteTask};

    return(
        <tasksContext.Provider value={value}>
            {children}
        </tasksContext.Provider>
    )
}