import { categories } from "../../../../data/categories"
import { CategoryCard } from "../category_card"
import { CategoryContainer, CategoryCont } from "./styles"


export const CategoryWidget = () => {
  return (
    <CategoryContainer>

        <h2>Categorias</h2>
        <CategoryCont>

            {
              categories.map((item) =>
              <CategoryCard key={item.id} {...item}/>)
            }
        </CategoryCont>
      
    </CategoryContainer>
  
  )
}
