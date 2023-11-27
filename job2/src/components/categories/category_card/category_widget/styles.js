import styled from "styled-components";

export const CategoryContainer = styled.div`
display:block;
text-align:center;
font-size: 35px;
font-family: 'chewy';
color: var(--green);
text-shadow: 1px 1px 2px var(--yellow);
`
export const CategoryCont =styled.div`
display:flex;
justify-content: space-around;
align-items: center;
padding: 5rem;
color: black;
font-size: 15px;
font-family: 'Playpen Sans';




@media (max-width:768px) {
    display: flex;
    gap: 35px;
    img{
        display: none;
    }
}
@media (max-width:993px){
   display: flex;
   flex-wrap: wrap;
}
`