import {
    BrowserRouter, Route, Routes as ReactDomRoutes, 
} from 'react-router-dom';
import HomeLayout from '../layout/home/home_layout';
import Header from '../pages/header/header'
import { Login }  from '../pages/Login/Login'
import User from '../pages/User/User'
import {AboutUs }from '../pages/aboutUs/AboutUs'
import ProductWidget from '../components/products/product_wiedgets/product_widgets'
import { PremiunWidget } from '../pages/premiun/premiun_widget/premiun_widget';
import {useContext} from 'react'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'
import AuthContext, {AuthProvider} from '../context/AuthContext'

const Routes = () => {

    const isAuth = useContext(AuthContext);
    return(

        <BrowserRouter>
        <AuthProvider>
            <HomeLayout>
                <ReactDomRoutes>
                        <Route path='/' element={<Header />}/>
                    <Route path='products'>
                        <Route index element ={<ProductWidget/>}/>
                    </Route>
                    <Route path='premiun'>
                        <Route index element={<PremiunWidget/>}/>
                    </Route>
                    
                    {!isAuth && <Route path='Login' element={<Login />} />}
                    <Route path='usuario/ :username'
                    element={<ProtectedRoute redirectTo={'/Login'}>
                        <User />
                    </ProtectedRoute>}/>
                    <Route path='aboutUs'>
                        <Route index element={<AboutUs />}/>
                    </Route>

                    
                    <Route path='*' element={<p>Error</p>} />
                </ReactDomRoutes>
            </HomeLayout>
        </AuthProvider>
        </BrowserRouter>

       
    )
}

export default Routes;
