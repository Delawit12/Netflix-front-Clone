import { useState, useEffect } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
// pages
import Home from './pages/home/Home';
import SecondPage from './pages/home/SecondPage';

//component
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className='app'>
      <Nav />
      <Routes>    
        <Route path='/' element={<Home />} />
        <Route path='/SecondPage' element={<SecondPage />} />
        <Route path='*' element={<><h1>4O4</h1></>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
