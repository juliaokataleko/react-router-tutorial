import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className="App">
        <div><Navbar/></div>
        <h1>Reacter Router</h1>
        <div>
          <Outlet />
        </div>
        <hr />
        <div>Footer</div>
      </div>
    </>
  )
}

export default App
