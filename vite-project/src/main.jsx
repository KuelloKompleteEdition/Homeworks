import React from 'react'
import ReactDOM from 'react-dom'
import FirstApp from './FirstApp.jsx'
import { ComponentApp } from './ComponentApp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp value = {10}></FirstApp>
    <ComponentApp></ComponentApp>
  </React.StrictMode>,
)
