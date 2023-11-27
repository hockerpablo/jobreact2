import Routes from './routes/Routes';
import { GlobalStyles } from './styles/global_styles';
import { BurguerMenu } from './components/togglebar/ToggleMenu';



function App(){
  return (
  <>
  
  <BurguerMenu>

  <Routes />
  <GlobalStyles />

  </BurguerMenu>
 
  
  </>
  )
}


export default App
