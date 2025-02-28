"use client"
import React from 'react'
import Header from '@/components/header&Footer/Header'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'; // Correct import
import Home from '../pages/Home'
const page = () => {
  return (
    <Router> {/* Wrap the entire app with Router */}
    <div className="bg-[url('https://i.imgur.com/iHdHgmG.png')] bg-cover bg-center p-4 shadow-lg h-screen flex flex-col" >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
 
      </div>
      
  </Router>
  )
}

export default page