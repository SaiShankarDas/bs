import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const Layout: React.FC = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
      <FloatingWhatsApp />
    </>
  );
};

export default Layout;
