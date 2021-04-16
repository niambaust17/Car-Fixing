import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const BookingService = () =>
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])
    console.log(loggedInUser);
    useEffect(() =>
    {
        fetch('http://localhost:5050/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    console.log(orders);
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
                            orders.map(order =>
                                <div className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">{order.title}</h5>
                                            <p className="card-text">{order.cost}$</p>
                                            <p className="card-text">{order.status}</p>
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