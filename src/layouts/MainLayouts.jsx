import React from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
const MainLayouts = () => {
  return (
    <>
    <Nav />
    <Outlet />
    </>
  )
}

export default MainLayouts