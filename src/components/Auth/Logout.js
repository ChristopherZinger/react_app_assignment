import React, { useContext, useEffect } from 'react';
import { UserContext } from '../UserContext/UserContext'
import { Redirect } from 'react-router-dom';


const Logout = props => {
    const { logout, isAuth } = useContext(UserContext);

    useEffect(() => {
        logout();
    }, [])

    if (isAuth) {
        return <div> loggin out </div>
    } else {
        return <Redirect to="/" />
    }
}

export default Logout;