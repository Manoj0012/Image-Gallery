import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './homepage'
import About from './aboutas'
import Signup from './signup'
import Login from './login'
import Gallery from './gallery'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
    </Routes>
  )
}

export default App
