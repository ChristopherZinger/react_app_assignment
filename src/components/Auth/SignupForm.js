import React, { useState, useContext } from 'react';
import { UserContext, UserContextProvider } from '../UserContext/UserContext'


function SignupForm(props) {

    const { signup } = useContext(UserContext);

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
    )
}

export default SignupForm 