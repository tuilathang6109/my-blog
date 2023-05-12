import './App.css'

import { useState } from 'react'

import LeftSide from './pages/leftSide/leftSide';
import RightSide  from './pages/rightSide/rightSide';
function App() {
  return (
    <>
      <div id='wrap' className='flex sm:hidden s:hidden'>
            <LeftSide/>
            <RightSide/>
          </div>
          <div className='xl:hidden lg:hidden md:hidden '>
            The mobile interface is being built...
          </div>
    </>
  )
}
export default App
