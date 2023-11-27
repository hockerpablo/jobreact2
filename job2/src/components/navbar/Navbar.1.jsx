import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import icono from '../../assets/img/banana.png';
import { FaBars } from 'react-icons/fa6';
import { HomeContainer, LinksContainer, Logo, NavbarContainer } from './styles';
import AuthContext from '../../context/AuthContext';






export const Navbar = () => {

  

  const navigate = useNavigate();

  const { isAuth, user } = useContext(AuthContext);
  return (


    <NavbarContainer>

      <div>
        <Logo onClick={() => navigate('/')}>

          <img src={icono} alt="" />

        </Logo>
      </div>

      <LinksContainer>
        <HomeContainer className='active'>

          <div>
            
            <NavLink to='/' style={({ isActive }) => ({ color: isActive ? '#A75151' : '#f3f3f3' })}>Home</NavLink>
          </div>
          <div>
            
            <NavLink to={isAuth ? `/ususario/${user}` : 'Login'} style={({ isActive }) => ({ color: isActive ? '#A75151' : '#f3f3f3' })}>
              {isAuth ? 'perfil' : 'Login'}
            </NavLink>
          </div>
          <div>
            
            <NavLink to='/products' style={({ isActive }) => ({ color: isActive ? '#A75151' : '#f3f3f3' })}>Productos</NavLink>
          </div>
          <div>
            
            <NavLink to='/premiun' style={({ isActive }) => ({ color: isActive ? '#A75151' : '#FFC300' })}>Destacados</NavLink>
          </div>
          <div>
            
            <NavLink to='/aboutUs' style={({ isActive }) => ({ color: isActive ? '#A75151' : '#f3f3f3' })}>Nosotros</NavLink>
          </div>

        </HomeContainer>
      </LinksContainer>

      <FaBars/>

    </NavbarContainer>

  );
};
