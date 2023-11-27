import styled from "styled-components";

export const Logo = styled.div`
  width: 150px;
  height: 150px;

  img {
    width: 150px;
  }
`;
export const NavbarContainer = styled.div`
  height: 150px;
  background-color: var(--cream-bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;

  .Burguer {
    display: none;
  }
  img {
    width: 150px;
    cursor: pointer;
  }
  svg {
    display: none;
    
  }

  @media (max-width: 1200px) {
    svg {
      position: relative;
      top: 22px;
      left: -20px;
    }
  }
  @media (max-width: 966px) {
    img {
      width: 150px;
    }
  }
  @media (max-width: 850px) {
    svg {
      display: none;
    }
  }
  @media (max-width: 768px) {
    svg{
      display: flex;
      font-size: 35px;
      position: relative;
      top: 0;
      cursor: pointer;  
    }
  }
  @media (max-width: 320px)
{
    svg{
      position: relative;
      left: 0;
    }
}
`;

export const LinksContainer = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  font-family: "Playpen Sans";
  font-size: 25px;
  color: black;
  text-shadow: 1px 1px 2px black;

  @media (max-width: 1200px) {
    font-size: 25px;
  }
  @media (max-width: 966px) {
    font-size: 15px;
  }
  @media (max-width: 850px) {
    display: flex;
    gap: 20px;
  }
  @media (max-width:768px){
    .active {
         font-size: 30px;
         width: 300px;
         display: block;
         text-align: center;
         z-index: 99;
         background-color: transparent;
      
       }
  }
`;

export const HomeContainer = styled(LinksContainer)`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
    backdrop-filter: blur(15px);
      border-radius: 25px;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      top: 30%;
      right: 0;
      left: 0;
  }
        
`
