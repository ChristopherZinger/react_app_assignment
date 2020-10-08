import React, { useState, useContext } from 'react';
import { UserContext, UserContextProvider } from '../UserContext/UserContext'
import { Redirect } from 'react-router-dom'
import * as gs from '../../styles/GlobalStyles.module.css';
import * as formStyles from '../../styles/FormStyles.module.css';


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
        <div className={gs.center + " card border-secondary mb-3"} style={{ maxWidth: '30rem' }}>
            {isAuth ? <Redirect to='/dashboard' /> : null}
            <div className="card-header">Signup</div>
            <div className={formStyles.formContainer}>

                <form onSubmit={handleSignup}>
                    <label htmlFor="email" className="col-form-label">Email Address:</label>
                    <input type="email" name="email" value={user.email || ""}
                        onChange={handleChange} placeholder="email"
                        className="form-control" />

                    <label htmlFor="fullName" className="col-form-label">Full Name</label>
                    <input type="text" name="fullName" value={user.fullName || ""}
                        onChange={handleChange} placeholder="Full Name"
                        className="form-control" />

                    <label htmlFor="password" className="col-form-label">Password</label>
                    <input type="password" name="password" value={user.password || ""}
                        onChange={handleChange} placeholder="password"
                        className="form-control" />


                    <label htmlFor="password" className="col-form-label">Are you a health taker of health provider?</label>
                    <select name="type" value={user.type}
                        onChange={handleChange}
                        className="form-control">
                        <option value="careTaker">Care Taker</option>
                        <option value="careGiver">Care Provider</option>
                    </select><br />

                    <button className="btn btn-primary" type="submit">Signup</button>
                </form>
            </div>
            <hr />
            <br /> <br />
        </div>
    )
}

export default SignupForm 