import React from 'react'
import { ContentContainerStyled, LayoutContainerStyled } from './styles'
import { Navbar } from '../../components/navbar/Navbar.1'
import { Footer } from '../../components/footer/footer'



export const HomeLayout = ({ children }) => {
  return (

    <LayoutContainerStyled>
     <Navbar />
  
     <ContentContainerStyled> {children} </ContentContainerStyled>
    <Footer />
    </LayoutContainerStyled>
  )
}

export default HomeLayout;