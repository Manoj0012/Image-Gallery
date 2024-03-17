import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './homepage'
import About from './aboutas'
import Signup from './signup'
import Login from './login'
import Gallery from './gallery'
import Userdashboard from './userdashboard'
import Admindashboard from './admindashboard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from "react-router-dom";
function App() {
  const nav =  useNavigate();
  window.nav = nav;
    const toastContainerOptions = {
    position: 'top-right',
    autoClose: 1000, 
  };
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
      <Route path='/user' element={<Userdashboard/>}></Route>
      <Route path='/admin' element={<Admindashboard/>}></Route>
      <Route path='/admin/user' element={<Admindashboard/>}></Route>
      <Route path='/admin/post' element={<Admindashboard/>}></Route>
      <Route path='/admin/addadmin' element={<Admindashboard/>}></Route>    
    </Routes>
    <ToastContainer {...toastContainerOptions} />
    </>
  )
}

export default App
