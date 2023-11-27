import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Authcontext from '../../context/AuthContext';
import { Button } from '../Login/styles';

const User = () => {
    const {username}= useParams();
    const {handleLogout}= useContext(Authcontext);

    return (
        <div>
            <h1>Beinvenido {username}</h1>
            <Button onClick={()=> handleLogout()} >Logout</Button>
        </div>
    )
}

export default User;