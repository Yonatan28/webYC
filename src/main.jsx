import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './scss/themes/dark.scss'
import Home from './pages/Home'
import 'bootstrap/dist/js/bootstrap.bundle.min';
ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
