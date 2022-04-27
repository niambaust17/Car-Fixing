import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const ManageService = () =>
{
    const [services, setServices] = useState([])

    const fetchServices = () =>
    {
        fetch(`https://boiling-reaches-73904.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }
    useEffect(() =>
    {
        fetchServices()
    }, [])

    const deleteService = id =>
    {
        fetch(`https://boiling-reaches-73904.herokuapp.com/service/${ id }`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => fetchServices())
            .then(error => console.log(error))
    }

    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <h1>Manage Service</h1>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.map((service, index) =>
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td><img src={service.imageURL} alt="" style={{ width: '60px' }} /></td>
                                        <td>{service.title}</td>
                                        <td>${service.cost}</td>
                                        <td><button onClick={() => deleteService(service._id)} className="btn btn-outline-danger">Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageService;