import  { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import icono from '../../assets/img/banana.png'
import {FaHouseChimneyUser, FaCircleUser, FaRegistered, FaAppleWhole, FaRankingStar, FaBuilding, FaPeriscope} from 'react-icons/fa6'
import { HomeContainer, LinksContainer, Logo, NavbarContainer, ToggleBar } from './styles'
import AuthContext from '../../context/AuthContext'




export const Navbar = () => {
  
  const navigate = useNavigate();
  

 
  const { isAuth, user } = useContext(AuthContext);
  return (
    
    
      <NavbarContainer>
    
        <div>
        <Logo onClick={() => navigate ('/')}>

          <img  src={icono} alt="" />
        
        </Logo>
        </div>
        
      <LinksContainer>
      <HomeContainer >

           <div>
           <FaHouseChimneyUser/>
           <NavLink to='/' style={({isActive}) =>  ({color: isActive ? '#A75151' : '#f3f3f3'})}>Home</NavLink>
           </div>
           <div>
           <FaCircleUser/>
            <NavLink to ={isAuth ? `/ususario/${user}` : 'Login'}style={({isActive}) =>  ({color: isActive ? '#A75151' : '#f3f3f3'})}>
              {isAuth ? 'perfil' : 'Login'}
            </NavLink>
           </div>
           <div>
            <FaAppleWhole/>
            <NavLink to='/products'style={({isActive}) =>  ({color: isActive ? '#A75151' : '#f3f3f3'})}>Productos</NavLink>
           </div>
           <div>
            <FaRankingStar/>
            <NavLink to='/premiun'style={({isActive}) =>  ({color: isActive ? '#A75151' : '#FFC300'})}>Destacados</NavLink>
           </div>
           <div>
            <FaBuilding/>
            <NavLink to='/aboutUs'style={({isActive}) =>  ({color: isActive ? '#A75151' : '#f3f3f3'})}>Nosotros</NavLink>
           </div>
           
       </HomeContainer>
      </LinksContainer>
          
      <ToggleBar> click </ToggleBar>
        
    
    </NavbarContainer>
    
  )
}

export default Navbar;
