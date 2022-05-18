import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav'
import App from './components/App'
import data from "./data"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className="container">
        <Nav />
        <App />
    </div>
)
