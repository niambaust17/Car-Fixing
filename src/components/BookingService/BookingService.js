import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const BookingService = () =>
{
    const { user } = useAuth();
    const [orders, setOrders] = useState([])

    useEffect(() =>
    {
        fetch('https://boiling-reaches-73904.herokuapp.com/orders?email=' + user.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
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