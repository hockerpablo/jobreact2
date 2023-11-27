import React from 'react'
import { CategoryCards } from './styles'

export const CategoryCard = ({icono, name, category}) => {
  return (

    
    <CategoryCards>

        <img src={icono} alt={category} />
        <h2>{name}</h2>
        <div></div>
    
    </CategoryCards>
  )
}
