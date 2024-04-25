import React from 'react'
import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { FindBar } from '../components/FindBar'

export const Layout=()=> {
  return (
    <>
    <div >
    <Navbar/>
    <Header/>
    <FindBar/>
    <Outlet/>
    <Footer/>
    </div>
    </>
    
  )
}