import React, { useState, useContext } from 'react';
import { UserContext } from '../UserContext/UserContext'
import { Redirect } from 'react-router-dom';
import * as gs from '../../styles/GlobalStyles.module.css';
import * as formStyles from '../../styles/FormStyles.module.css';


function LoginForm(props) {
    const { login, isAuth, errors } = useContext(UserContext);
    const [user, setUser] = useState({ email: '', password: '' })

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
        <div className={gs.center + " card border-secondary mb-3"} style={{ maxWidth: '30rem' }}>
            {isAuth ? <Redirect to='/dashboard' /> : null}
            <div className="card-header">Login</div>
            <div className={formStyles.formContainer}>
                <form onSubmit={handleSignup}>
                    <label htmlFor="email" className="col-form-label">Email Address:</label>
                    <input type="email" name="email" value={user.email || ""}
                        onChange={handleChange} placeholder="email"
                        className="form-control" />
                    <p>{errors ? errors.email : null}</p>

                    <label htmlFor="password" className="col-form-label">Password:</label>
                    <input type="password" name="password" value={user.password || ""}
                        onChange={handleChange} placeholder="password"
                        className="form-control" />
                    <p>{errors ? errors.password : null}</p>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>

            <hr />
            <br /> <br />
        </div>
    )
}

export default LoginForm;


{/* <div className="card border-secondary mb-3" style="max-width: 20rem;">
  <div className="card-header">Header</div>
  <div className="card-body">
    <h4 className="card-title">Secondary card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}



// <div className="modal">

//     {isAuth ? <Redirect to='/dashboard' /> : null}

//     <div className="modal-dialog" role="document">
//         <div className="modal-content">
//             <div className="modal-header">
//                 <h5 className="modal-title">Login</h5>
//                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                     <span aria-hidden="true">&times;</span>
//                 </button>
//             </div>
//             <div className="modal-body">
//                 <form onSubmit={handleSignup}>
//                     <input type="email" name="email" value={user.email || ""}
//                         onChange={handleChange} placeholder="email" /> <br />
//                     <p>{errors ? errors.email : null}</p>

//                     <input type="password" name="password" value={user.password || ""}
//                         onChange={handleChange} placeholder="password" /><br />
//                     <p>{errors ? errors.password : null}</p>

//                     <button type="submit">Signup</button>
//                 </form>
//             </div>
//             <div className="modal-footer">
//                 <p></p>
//             </div>
//         </div>
//     </div>
// </div>