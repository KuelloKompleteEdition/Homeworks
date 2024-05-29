import React from 'react'
import ReactDOM from 'react-dom'
import FirstApp from './FirstApp.jsx'
import { TodoApp } from './components/ToDo.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp></TodoApp>
  </React.StrictMode>,
)
