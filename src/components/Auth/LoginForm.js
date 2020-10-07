import React, { useState, useContext } from 'react';
import { UserContext } from '../UserContext/UserContext'
import { Redirect } from 'react-router-dom';

function LoginForm(props) {
    const { login, isAuth } = useContext(UserContext);
    const [user, setUser] = useState({ type: 'careGiver' })

    function handleChange({ target }) {
        setUser({
            ...user,
            [target.name]: target.value
        })
    }

    function handleSignup(e) {
        e.preventDefault();
        login(user)
    }

    return (
        <div>
            {isAuth ? <Redirect to='/dashboard' /> : null}
            <form onSubmit={handleSignup}>
                <input type="email" name="email" value={user.email || ""}
                    onChange={handleChange} placeholder="email" /> <br />
                <input type="password" name="password" value={user.password || ""}
                    onChange={handleChange} placeholder="password" /><br />
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default LoginForm;