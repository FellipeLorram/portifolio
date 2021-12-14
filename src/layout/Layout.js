import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'
import { Container } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (
    <Container>
      <div className="side">
        <SideBar />
      </div>
      <div className="main">
        <Header />
        {children}
      </div>
    </Container>
  )
}
