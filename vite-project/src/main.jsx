import React from 'react'
import ReactDOM from 'react-dom'
import FirstApp from './FirstApp.jsx'
import { Father } from './components/Father.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp></FirstApp>
    <Father></Father>
  </React.StrictMode>,
)
