import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './OrderedServiceDataTable.css';

const OrdersDataTable = ({ orders, fetchOrders }) =>
{
    const [updateStatus, setUpdateStatus] = useState();
    const handleUpdateBtn = id =>
    {
        const updateData = { id, updateStatus }

        fetch('https://boiling-reaches-73904.herokuapp.com/update/' + id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data =>
            {
                fetchOrders();
            })

    }

    const handleChange = (e, id) =>
    {
        setUpdateStatus(e.target.value);
    }

    return (
        <>
            <h1>Order List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service</th>
                        <th scope="col">Pay With</th>
                        <th scope="col">Current Status</th>
                        <th scope="col">Order Time</th>
                        <th scope="col">Select & Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) =>
                            <tr key={index}>
                                {/* <th scope="row">{index + 1}</th> */}
                                <td data-label="#">{index + 1}</td>
                                <td data-label="Email">{order.email}</td>
                                <td data-label="Service">{order.title}</td>
                                <td data-label="Pay With">{order.payWith}</td>
                                <td data-label="Current Status">{order.status}</td>
                                <td data-label="Order Time">{(new Date(order.orderTime).toDateString('dd/MM/yyyy'))}</td>
                                <td data-label="Select & Update">
                                    <select onChange={handleChange} aria-label="Disabled select example">
                                        <option></option>
                                        <option value="Pending">Pending</option>
                                        <option value="On Going">On Going</option>
                                        <option value="Done">Done</option>
                                    </select>
                                    <FontAwesomeIcon icon={faEdit} style={{ margin: '0 5px', cursor: 'pointer' }} onClick={() => handleUpdateBtn(order._id)} />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
};

export default OrdersDataTable;