import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm, LoginContainer, Card, Button } from './styles';
import  AuthContext from '../../context/AuthContext';
import logo from '../../../public/Login.png'


 export const Login = () => {
    const {handelSubmit, handleChange, form, isAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(isAuth){
            navigate('/');
        }
    }, [navigate, isAuth]);
    return(
     <LoginContainer>
        

            <img src={logo} />
        <Card>
            <LoginForm>
                <input type="text"
                placeholder="ingrese su nombre"
                id="username"
                name="username"
                value={form.username}
                onChange={e => handleChange(e)}
                />
               <input 
               type='text'
               placeholder='ingrese su apellido'
               id='apellido'
               name='apellido'
               value={form.lastname}
               onChange={e => handleChange(e)}
               />
                <input 
               type='email'
               placeholder='ingrese su correo'
               id='email'
               name='email'
               value={form.email}
               onChange={e => handleChange(e)}
               />
               
               <textarea
                cols={30}
                rows={10}
                placeholder="deje su mensaje"
               />
               
               <Button type="submit" onClick={e => handelSubmit(e)}>Registrate</Button>
            </LoginForm>
        </Card>
               
     </LoginContainer>
    )
 }
 export default Login;