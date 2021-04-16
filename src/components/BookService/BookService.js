import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { useParams } from 'react-router';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const BookService = () =>
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const params = useParams();

    const [service, setService] = useState([])

    useEffect(() =>
    {
        fetch('http://localhost:5050/services?title=' + params.title)
            .then(res => res.json())
            .then(data => setService(data[0]))
    }, [])

    const onSubmit = data => { console.log(data) }

    const handlePaymentSuccess = paymentId =>
    {
        const orderDetails = { ...loggedInUser, status: 'Pending', payWith: 'Credit Card', title: service?.title, cost: service?.cost, paymentId, orderTime: new Date() }

        fetch('http://localhost:5050/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data =>
            {
                console.log(data);
            })
    }

    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <h1>Book a Service</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" defaultValue={service?.title} {...register("title")} />
                        <br />
                        <input className="form-control" defaultValue={service?.cost} {...register("cost")} />
                    </form>
                    <br /><br />
                    <ProcessPayment handlePayment={handlePaymentSuccess} />
                </div>
            </div>
        </div>
    );
};

export default BookService;