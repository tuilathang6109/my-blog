import './App.css'

import Sidebar from './pages/sidebar/Sidebar';
import Content  from './pages/content/Content';
import "./index.css"
function App() {
  return (
    <>
      <div id='wrap' className='flex transparent'>
          <Sidebar/>
          <Content/>
          <Content/>

      </div>
    </>
  )
}
export default App  
