import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faSignOutAlt, faList, faPlus, faUserPlus, faHome, faBoxOpen, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import useAuth from '../../../hooks/useAuth';

const Sidebar = () =>
{
    const { user, logOut } = useAuth();
    const [admin, setIsAdmin] = useState(false);

    useEffect(() =>
    {
        fetch('https://boiling-reaches-73904.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [user.email])


    return (
        <div className="sidebar pt-5" style={{ height: "100vh" }}>
            <ul>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /><span>Home</span>
                    </Link>
                </li>
                {
                    admin ?
                        <>
                            <li>
                                <Link to="/allOrderedService" className="text-white">
                                    <FontAwesomeIcon icon={faBoxOpen} /><span>Ordered Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/addService" className="text-white">
                                    <FontAwesomeIcon icon={faPlus} /><span>Add Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/makeAdmin" className="text-white">
                                    <FontAwesomeIcon icon={faUserPlus} /><span>Make Admin</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/manageService" className="text-white">
                                    <FontAwesomeIcon icon={faTrash} /><span>Manage Services</span>
                                </Link>
                            </li>
                        </> :
                        <>
                            <li>
                                <Link to="/bookingService" className="text-white">
                                    <FontAwesomeIcon icon={faList} /><span>Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/review" className="text-white">
                                    <FontAwesomeIcon icon={faCommentAlt} /><span>Review</span>
                                </Link>
                            </li>
                        </>
                }
                <li>
                    <Link to="/" onClick={logOut} className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /><span>Logout</span></Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;