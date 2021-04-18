import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const BookingService = () =>
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])

    useEffect(() =>
    {
        fetch('https://boiling-reaches-73904.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <h1>Service List By User</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            orders.map((order, index) =>
                                <div className="col" key={index}>
                                    <div className="card h-100 border-0" style={{ borderRadius: '10px' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{order.title}</h5>
                                            <p className="card-text">${order.cost}</p>
                                            <p className="card-text d-inline p-2" style={{ borderRadius: '7px', backgroundColor: '#90ee904d' }}>{order.status}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingService;