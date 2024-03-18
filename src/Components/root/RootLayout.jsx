import React from 'react'
import Menu from '../menu/Menu'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Text from '../../pages/text/Text'
import Servise from './Servise'
import Get from '../../pages/get/Get'
import Help from '../../pages/help/Help'
import Pricing from '../../pages/pricing/Pricing'

const RootLayout = () => {
  return (
    <>
    <Menu/>
    <Text/>
    <Servise/>
    <Get/>
    <Help/>
    <Pricing/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default RootLayout