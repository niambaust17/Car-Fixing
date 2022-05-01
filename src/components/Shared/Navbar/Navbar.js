import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import './Navbar.css';
import { GrMenu, GrClose } from "react-icons/gr";


const Navbar = () =>
{
    const { user, logOut } = useAuth();
    const [admin, setIsAdmin] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() =>
    {
        fetch('https://boiling-reaches-73904.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user?.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [user?.email])

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">CAR FIXING</Link>
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? <GrMenu size="24px" /> : <GrClose size="24px" />}
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">Expert</Link>
                        </li>
                        {
                            admin ?
                                <li className="nav-item">
                                    <Link className="nav-link" to="/allOrderedService">Admin Dashboard</Link>
                                </li> :
                                <li className="nav-item">
                                    <Link className="nav-link" to="/bookingService">Dashboard</Link>
                                </li>
                        }
                        <li className="nav-item">
                            <Link className="nav-link" to="">Contact</Link>
                        </li>
                        {
                            user?.email &&
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">{user.displayName}</Link>
                                </li>
                            </>
                        }
                        <li className="nav-item">
                            {user?.email ? <Link className="nav-link" to="/" onClick={logOut}>Logout</Link> : <Link className="nav-link" to="/login">Login</Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;