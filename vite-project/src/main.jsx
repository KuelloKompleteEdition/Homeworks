import React from 'react'
import ReactDOM from 'react-dom'
import FirstApp from './FirstApp.jsx'
import  ComponentApp  from './ComponentApp.jsx'
import MultipleCustomHooks from './components/MultipleCustomHooks.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustomHooks></MultipleCustomHooks>
    <FirstApp value = {10}></FirstApp>
    <ComponentApp></ComponentApp>
  </React.StrictMode>,
)
