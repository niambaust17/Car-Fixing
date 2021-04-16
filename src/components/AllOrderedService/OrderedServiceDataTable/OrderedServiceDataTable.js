import React from 'react';

const OrdersDataTable = ({ orders }) =>
{
    return (
        <div>
            <h1>Order List</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service</th>
                        <th scope="col">Pay By</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Order Time</th>
                        <th scope="col">Status</th>
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
                                <td>{order.cost}</td>
                                <td>{(new Date(order.orderTime).toString('dd/MM/yyyy'))}</td>
                                <td>
                                    <select name="status" className="form-select" aria-label="Default select example">
                                        <option selected>Pending</option>
                                        <option value="On Going">On Going</option>
                                        <option value="Done">Done</option>
                                    </select>
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