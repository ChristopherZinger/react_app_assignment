
import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router';
import { UserContext } from '../UserContext/UserContext'

const UserInfo = props => {
    const { user, isAuth } = useContext(UserContext);
    if (isAuth) {
        return (
            <div>
                <br /> <br />
                <p class="lead">Hello {user.fullName}. You are registered as a {user.type === 'careTaker' ? 'patient' : "care provider"}</p>
                <hr />
            </div>
        )
    } else {
        return null;
    }
}

export default UserInfo;

