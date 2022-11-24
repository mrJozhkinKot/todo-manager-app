import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './layouts/Footer'
import Header from './layouts/Header'

const Layout = () => {
  return (
    <>
    <Header />
    <main>
        <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default Layout;