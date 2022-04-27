import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderedServiceDataTable from '../OrderedServiceDataTable/OrderedServiceDataTable';

const AllOrders = () =>
{
    const [orders, setOrders] = useState([])

    const fetchOrders = () =>
    {
        fetch(`https://boiling-reaches-73904.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }
    useEffect(() =>
    {
        fetchOrders();
    }, [])

    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <OrderedServiceDataTable orders={orders} fetchOrders={fetchOrders} />
                </div>
            </div>
        </div>
    );
};

export default AllOrders;