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
}`

export const Button = styled.button`
background-color: var();
color: var();
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
`


