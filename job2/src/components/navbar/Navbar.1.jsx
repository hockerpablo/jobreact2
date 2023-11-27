import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import icono from '../../assets/img/banana.png';
import { FaBars } from 'react-icons/fa6';
import { HomeContainer, LinksContainer, Logo, NavbarContainer } from './styles';
import AuthContext from '../../context/AuthContext';
import { MenuBurguer } from '../togglebar/ToggleMenu';






export const Navbar = () => {

  const {menu, toggleMenu} =useContext (MenuBurguer)

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
        <HomeContainer className={menu ? 'active' : ''}>

          <div>
            
            <NavLink to='/' style={({ isActive }) => ({ color: isActive ? '#A75151' : 'black' })}>Home</NavLink>
          </div>
          <div>
            
            <NavLink to={isAuth ? `/ususario/${user}` : 'Login'} style={({ isActive }) => ({ color: isActive ? '#A75151' : 'black' })}>
              {isAuth ? 'perfil' : 'Login'}
            </NavLink>
          </div>
          <div>
            
            <NavLink to='/products' style={({ isActive }) => ({ color: isActive ? '#A75151' : 'black' })}>Productos</NavLink>
          </div>
          <div>
            
            <NavLink to='/premiun' style={({ isActive }) => ({ color: isActive ? '#A75151' : '#FFC300' })}>Destacados</NavLink>
          </div>
          <div>
            
            <NavLink to='/aboutUs' style={({ isActive }) => ({ color: isActive ? '#A75151' : 'black' })}>Nosotros</NavLink>
          </div>

        </HomeContainer>
      </LinksContainer>

      <FaBars onClick={toggleMenu}/>

    </NavbarContainer>

  );
};
