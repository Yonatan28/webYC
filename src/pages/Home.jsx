import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import logo from '../logo.svg'
import Menu from '../components/Menu'

import { BsSunFill, BsSun } from "react-icons/bs";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Menu />
      <header className="App-header">
     
        <br />
        <br />
        <br />
        <p>
        <BsSunFill />
          AQUI METERE TODO MI DEMAS CODIGO hehe
        </p>
      
      </header>
    </div>
  )
}

export default App
