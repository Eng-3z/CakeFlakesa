import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {


  return (
    <>
    <ToastContainer/>
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
