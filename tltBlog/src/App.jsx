import './App.css'

import { useState } from 'react'

import LeftSide from './pages/leftSide/leftSide';
import RightSide  from './pages/rightSide/rightSide';
import "./index.css"
function App() {
  return (
    <>
      <div id='wrap' className='xl:flex lg:flex'>
        <div className=''>
          <LeftSide/>
        </div>
        <div className=''>
          <RightSide/>
        </div>
      </div>
    </>
  )
}
export default App  
