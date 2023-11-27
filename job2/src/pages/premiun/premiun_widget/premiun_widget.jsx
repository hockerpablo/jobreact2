import {premiun} from '../../../data/premiun'
import { PremProdWidgCont, PremWidgetCont} from './styles'
import { PremiunCard } from '../premiun_card/premiun_card'

export const PremiunWidget = () => {
    return (
      <PremProdWidgCont>
  
          <h2> Productos Destacados</h2>
                <PremWidgetCont>

  
              {
                  premiun.map((product) => <PremiunCard key={product.id} {...product}/>)
                }
          
                </PremWidgetCont>
              
      
      </PremProdWidgCont>
    )
  }

  export default PremiunWidget;