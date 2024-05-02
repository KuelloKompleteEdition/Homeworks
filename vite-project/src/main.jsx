import React from 'react'
import ReactDOM from 'react-dom'
import FirstApp from './FirstApp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp value = {10}></FirstApp>
  </React.StrictMode>,
)
