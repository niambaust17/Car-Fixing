import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const Review = () =>
{
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data =>
    {
        const reviewInfo = {
            name: data.name,
            address: data.address,
            description: data.description
        }

        console.log(reviewInfo);

        const url = `https://boiling-reaches-73904.herokuapp.com/addReview`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => console.log('server side', res));
    };

    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <h1>Review</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" placeholder="Enter your name" {...register("name", { required: true })} />
                        <br />
                        {errors.name && <span style={{ color: 'red' }}>This field is required</span>}
                        <br />
                        <input className="form-control" placeholder="Enter your address" {...register("address", { required: true })} />
                        <br />
                        {errors.address && <span style={{ color: 'red' }}>This field is required</span>}
                        <br />
                        <input className="form-control" placeholder="Description" {...register("description", { required: true })} />
                        <br />
                        {errors.description && <span style={{ color: 'red' }}>This field is required</span>}
                        <br />
                        <input className="btn btn-outline-success" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;