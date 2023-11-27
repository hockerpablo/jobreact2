import React from 'react'
import { PremiunStyle } from '././styles'

export const PremiunCard = ({img, name, desc, price}) => {
  return (
<PremiunStyle>

        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>{desc}</p>
        <div>
            <p>${price}</p>
            <button>Agregar</button>
        </div>
</PremiunStyle>
    
  )
}
