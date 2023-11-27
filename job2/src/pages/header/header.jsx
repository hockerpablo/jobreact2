import React from 'react'
import icono from '../../assets/img/la deliciosa banana.png'
import { HeadreContainer } from './styles'
export const Header = () => {
  return (
    <HeadreContainer>

        <h1>bienvenido a frutalandia</h1>
        <h2>deliciosas y jugosas  para disfrutar</h2>
        <img src={ icono} alt="icono de la banana" />
        
    </HeadreContainer>
  
  )
}
 export default Header