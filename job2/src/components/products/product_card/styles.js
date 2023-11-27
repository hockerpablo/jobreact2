import styled from "styled-components";

export const ProductStyle = styled.div`
display:block;
text-align:center;
align-items:center;
background-color:var(--green);
width: 400px;
margin-bottom: 3rem;
border-radius: 025px;
font-family: 'Playpen Sans';
font-size: 20px;
color: var(--white-bg);

img{
    width: 300px;
    height: 170px;
    border: 2px solid white;
    border-radius: 25px;
    position: relative;
    top: 1rem;
}
button{
    width: 120px;
    height: 30px;
    border-radius: 25px;
    background-color: var(--redapple);
    position: relative;
    top: -1rem;
    color: var(--white-bg);
    font-weight: 700;
}`