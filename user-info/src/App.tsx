import './App.css'


import { Route, Routes } from 'react-router-dom'
import Login from './components/Login' // Import the Login component
import Register from './components/Register'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
