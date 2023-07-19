import React from 'react'
import HeaderComp from '../PageComponents/HeaderComp'

const MainLayout = ({ children }) => {
  return (
    <div>
        <HeaderComp/>
        { children }
    </div>
  )
}

export default MainLayout