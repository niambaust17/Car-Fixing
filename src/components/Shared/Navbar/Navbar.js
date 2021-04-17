import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';

const Navbar = () =>
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/">CAR FIXING</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">Expert</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">Contact</Link>
                        </li>
                        {
                            loggedInUser?.isSignedIn &&
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">{loggedInUser.displayName}</Link>
                                </li>
                            </>
                        }
                        <li className="nav-item">
                            {loggedInUser.isSignedIn ? <Link className="nav-link" to="/" onClick={() => setLoggedInUser({})}>Logout</Link> : <Link className="nav-link" to="/login">Login</Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;