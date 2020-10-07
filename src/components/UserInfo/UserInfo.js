
import React, { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext'


const UserInfo = props => {

    const { user, isAuth } = useContext(UserContext);
    console.log(isAuth)
    if (isAuth) {
        return (
            <div>
                <h4>User Info</h4>
                <ul>
                    <li> {user.fullName} </li>
                    <li> {user.email} </li>
                    <li> {user.type} </li>
                </ul>
            </div>
        )
    } else {
        return null;
    }

}

export default UserInfo;

