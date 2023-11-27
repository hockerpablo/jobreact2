import React from 'react'
import { ProductStyle } from './styles'

export const ProductCard = ({img, name, desc, price}) => {
  return (
    <ProductStyle>

        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>{desc}</p>
        <div>
            <p>${price}</p>
            <button>Agregar</button>
        </div>
    
    </ProductStyle>
  )
}
