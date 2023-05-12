import './App.css'

import { useState } from 'react'

import LeftSife from './pages/leftSide/leftSide';
import RightSife  from './pages/rightSide/rightSide';
function App() {
  return (
    <>
      <div id='wrap' className='flex sm:hidden s:hidden'>
            <LeftSife/>
            <RightSife/>
          </div>
          <div className='xl:hidden lg:hidden md:hidden'>
            The mobile interface is being built...
          </div>
    </>
  )
}

export default App
