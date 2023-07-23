import React from 'react'
import HeaderComp from '../PageComponents/HeaderComp'
import Footer from '../PageComponents/Footer'

const MainLayout = ({ children }) => {
  return (
    <div>
        <HeaderComp/>
        { children }
        <Footer/>
    </div>
  )
}

export default MainLayout