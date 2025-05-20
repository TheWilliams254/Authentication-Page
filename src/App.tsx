import './App.css'
import { Routes, Route } from 'react-router'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'


function App() {
  return (
    <div classname = 'container bg gray-100' >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </div>
  )
}

export default App
