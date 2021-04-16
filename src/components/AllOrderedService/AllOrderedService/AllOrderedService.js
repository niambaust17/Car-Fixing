import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderedServiceDataTable from '../OrderedServiceDataTable/OrderedServiceDataTable';

const AllOrders = () =>
{
    const [orders, setOrders] = useState([])

    useEffect(() =>
    {
        fetch(`http://localhost:5050/orders`)
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
                    <OrderedServiceDataTable orders={orders} />
                </div>
            </div>
        </div>
    );
};

export default AllOrders;