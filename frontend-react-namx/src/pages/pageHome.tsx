import React, { useState, createContext } from 'react'
import Navbar from "../home/appBar.home"
import IntroContainer from '../home/container.intro'
import MainContainer from '../home/container.main'
import Footer from "../home/appFooter.home"
import Sidebar from '../home/appSide.home'
import { Container } from '@mui/system'
export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <IntroContainer />
      <Footer />

    </>

  )
}
