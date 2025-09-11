import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Framer from './Pages/learn-framer/framer'


function App() {

  return (
      <>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/test' element={<Framer />} />
          </Routes>
      </>
  )
}

export default App
