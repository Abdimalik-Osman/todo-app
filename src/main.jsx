import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";
import {UserProvider} from './contexts/user-context';
import { TasksProvider } from './contexts/tasks-context';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
     <UserProvider>
        <TasksProvider>
          <App />
        </TasksProvider>
     </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
