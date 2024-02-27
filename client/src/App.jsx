import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './homepage'
import About from './aboutas'
import Signup from './signup'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/login" element={<Signup/>}></Route>
    </Routes>
  )
}

export default App
