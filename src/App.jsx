import { useState, useContext } from 'react'
import{Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './components/routes/home';
import TaskDetails from './components/routes/taskDetail';

function App() {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/task/:id" element={<TaskDetails />} />
    </Routes>
    </div>
  )
}

export default App
