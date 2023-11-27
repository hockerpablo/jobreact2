import styled from "styled-components";

 export const LoginForm = styled.form`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
gap: 35px;
padding: 35px;

width: 100%;

& input {
    padding: 10px;
    width:80%;
    border: none;
    border-radius: 25px;
    outline: none;
    text-align: center;   
}
@media (max-width: 468px)
{
    width: 400px;
}
@media (max-width: 320px)
{
   position: relative;
   left: 0;
}`

export const Button = styled.button`
background-color: var(--redapple);
color: var(--white-bg);
border: none;
border-radius: 20px;
padding: 15px 25px;
font-family: 'Playpen Sans';
font-weight: 600;
cursor: pointer;
`
export const LoginContainer = styled.div`

position: relative;
left: -6rem;
top: -6rem;
max-width:300px;
margin: 0 auto;
height: calc(100vh - 120px);

img{
  border-radius: 25px;
  filter: blur(3px);
  position: relative;
  top: 50px;
  z-index: 3;
}
@media (max-width: 966px)
{
    position: relative;
    top: -9rem;
}
@media (max-width: 468px)
{
    img{
      width: 400px;
      position: relative;
      left: 4rem;
    }
}
@media (max-width: 586px)
{
    position: relative;
    left: -5rem;
}
@media (max-width: 320px)
{

  position: relative;
  left: -8px;
  top: 4rem;
   img{
    width: 300px;
    position: relative;
    left: 0;
    top: 0;
   }
}
`

export const Card = styled.div`
  background-color: var(--cream-bg);
  padding: 5px 5px 20px;
  color: var(--cream-bg);
  border-radius: 10px;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  top: -7rem;
  h2 {
    color: #3da9fc;
  }

  span {
    font-weight: 800;
    font-size: 1.2rem;
  }
  @media (max-width: 320px)
{
    width: 300px;
   
}
`


