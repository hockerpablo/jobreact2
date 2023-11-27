import styled from "styled-components";

export const FooterBott = styled.div`
width: 100%;
display:flex;
justify-content: center;
margin-top: 5rem;
background-color: var(--redapple);
color: var(--white-bg);
font-family: 'Playpen Sans';
text-shadow: 1px 1px 2px black;
position: relative;
bottom: 0;
img{
    width: 60px;
}
@media (max-width: 320px)
{
    h2{
        font-size: 15px;
    }
   
}`