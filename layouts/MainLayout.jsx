import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from '../crash1/src/components/NavBar'


const MainLayout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
   
    </>
  )
}

export default MainLayout