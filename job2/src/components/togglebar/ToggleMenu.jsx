import React from 'react'
import { useState, createContext } from 'react'


export const MenuBurguer = createContext()

export const BurguerMenu = ({ children })=>{
    
   const [menu, setMenu] =useState(false)

   const toggleMenu = () => {
    setMenu(!menu)
   }
    return (
      <MenuBurguer.Provider value={{ menu, toggleMenu}} >
        {children}
        </MenuBurguer.Provider>
  )
}
export default BurguerMenu;