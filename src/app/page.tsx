"use client";
import React from 'react';
import Header from '@/components/header&Footer/Header';
import Home from '../pages/Home';
import Footer from '@/components/header&Footer/Footer';

const Page = () => {
  return (
    <div className="bg-[url('https://i.imgur.com/iHdHgmG.png')] bg-cover bg-center p-4 shadow-lg h-screen flex flex-col">
      <Header />
         <Home />
      <Footer/>
    </div>
  );
};

export default Page;
