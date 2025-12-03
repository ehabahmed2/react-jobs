import React from 'react';
import Nav from '../components/Nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
const MainLayouts = () => {
  return (
    <>
    <Nav />
    <Outlet />
    < ToastContainer />
    </>
  )
};

export default MainLayouts