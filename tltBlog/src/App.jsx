import './App.css'

import { useState } from 'react'

import LeftSife from './pages/leftSide/leftSide';
import RightSife  from './pages/rightSide/rightSide';
function App() {
  return (
        <h1 id='wrap' className='flex' >
          <LeftSife/>
          <RightSife/>
        </h1>
  )
}

export default App
