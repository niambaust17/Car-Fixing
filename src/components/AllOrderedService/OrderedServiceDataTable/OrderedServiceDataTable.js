import React, { useState } from 'react';

const OrdersDataTable = ({ orders, fetchOrders }) =>
{
    const [updateStatus, setUpdateStatus] = useState("")
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

    const handleChange = (e) =>
    {
        setUpdateStatus(e.target.value);
    }

    return (
        <div>
            <h1>Order List</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service</th>
                        <th scope="col">Pay With</th>
                        <th scope="col">Current Status</th>
                        <th scope="col">Order Time</th>
                        <th scope="col">Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) =>
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{order.email}</td>
                                <td>{order.title}</td>
                                <td>{order.payWith}</td>
                                <td>{order.status}</td>
                                <td>{(new Date(order.orderTime).toDateString('dd/MM/yyyy'))}</td>
                                <td>
                                    <select onChange={handleChange} className="form-select" aria-label="Disabled select example">
                                        <option selected></option>
                                        <option value="Pending">Pending</option>
                                        <option value="On Going">On Going</option>
                                        <option value="Done">Done</option>
                                    </select>
                                    <button onClick={() => handleUpdateBtn(order._id)} className="btn btn-outline-success btn-sm">Update</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrdersDataTable;