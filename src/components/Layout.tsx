import React, { ReactNode } from 'react'
import Navbar from './Navbar'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout