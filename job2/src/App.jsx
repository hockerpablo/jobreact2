import Routes from './routes/Routes';
import { GlobalStyles } from './styles/global_styles';
import { HamburguesaMenu } from './components/togglebar/ToggleMenu';



function App(){
  return (
  <>
  
  <HamburguesaMenu>

  <Routes />
  <GlobalStyles />

  </HamburguesaMenu>
 
  
  </>
  )
}


export default App
