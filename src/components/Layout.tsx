import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../src/App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';

const Layout = () => {
 return (
  <>
   <Header />
   <main className="main">
    <Outlet />
   </main>
   <Footer />
  </>
 );
};

export default Layout;
