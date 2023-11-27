import React from 'react'
import { productsList } from '../../../data/productList'
import { ProductCard } from '../product_card/product_card'
import { ProdWidgCont, WidgetCont } from './styles'

export const ProductWidget = () => {
  return (
    <ProdWidgCont>

        <h2> Productos</h2>
        <WidgetCont>

            {
              productsList.map((product) => <ProductCard key={product.id} {...product}/>)
            }
        
            </WidgetCont>
    
    </ProdWidgCont>
  )
}
 export default ProductWidget;