import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const PrivateOutlet = () =>
{
    const { user } = useAuth();
    const location = useLocation();
    if (user === null)
    {
        return <h2>Loading...</h2>
    } else if (user?.email)
    {
        return <Outlet />
    }
    else
    {
        return <Navigate to="/login" state={{ from: location }} />
    }
    // return user.email ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />
}

export default PrivateOutlet