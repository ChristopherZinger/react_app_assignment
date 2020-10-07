import React, { useState, useContext } from 'react';
import { UserContext, UserContextProvider } from '../UserContext/UserContext'
import { Redirect } from 'react-router-dom'

function SignupForm(props) {

    const { signup, isAuth } = useContext(UserContext);

    const [user, setUser] = useState({ type: 'careGiver' })

    function handleChange({ target }) {
        setUser({
            ...user,
            [target.name]: target.value
        })
    }

    function handleSignup(e) {
        e.preventDefault();
        signup(user)
    }


    return (
        <div>
            {isAuth ? <Redirect to='/dashboard' /> : null}
            <form onSubmit={handleSignup}>
                <input type="email" name="email" value={user.email || ""}
                    onChange={handleChange} placeholder="email" /> <br />
                <input type="text" name="fullName" value={user.fullName || ""}
                    onChange={handleChange} placeholder="Full Name" /><br />
                <input type="password" name="password" value={user.password || ""}
                    onChange={handleChange} placeholder="password" /><br />


                <select name="type" value={user.type} onChange={handleChange}>
                    <option value="careTaker">careTaker</option>
                    <option value="careGiver">careGiver</option>
                </select><br />

                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default SignupForm 