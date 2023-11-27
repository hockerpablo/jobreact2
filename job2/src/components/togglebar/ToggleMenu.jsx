import React from 'react'
import { useState, createContext } from 'react'


export const MenuHamburguesa = createContext()

export const HamburguesaMenu = ({ children })=>{
    
   const [menu, setMenu] =useState(false)

   const ToggleMenu = () => {
    setMenu(!menu)
   }
    return (
      <MenuHamburguesa.Provider value={{ menu, ToggleMenu}} >
        {children}
        </MenuHamburguesa.Provider>
  )
}
export default HamburguesaMenu;