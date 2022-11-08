import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout