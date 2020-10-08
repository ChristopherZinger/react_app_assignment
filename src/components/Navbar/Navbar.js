import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';


const Navbar = props => {
    const { isAuth } = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            {!isAuth
                ? <Link to='/' className="navbar-brand" >TakeCare!</Link>
                : <Link className="navbar-brand" to='/dashboard' >dashboard</Link>
            }

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">  </ul>

                <div className=" my-2 my-lg-0">
                    <ul className="navbar-nav mr-auto">
                        {isAuth ?
                            <li className="nav-item">
                                <Link className="nav-link" to='/logout' >logout</Link>
                            </li>
                            :
                            <React.Fragment>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/signup' >signup</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/login' >login</Link>
                                </li>
                            </React.Fragment>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;