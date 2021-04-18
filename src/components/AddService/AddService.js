import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const AddService = () =>
{
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data =>
    {
        const serviceInfo = {
            title: data.title,
            description: data.description,
            cost: data.cost,
            imageURL: imageURL
        }

        const url = `https://boiling-reaches-73904.herokuapp.com/addService`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceInfo)
        })
            .then(res => console.log('server side', res));

        history.push("/allOrderedService");
    };

    const handleImageUpload = event =>
    {
        const imageData = new FormData();
        imageData.set('key', '6f945276fc99b3c8bd42c807bdf9df6d');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(response =>
            {
                setImageURL(response.data.data.display_url);
            })
            .catch(error =>
            {
                console.log(error);
            });
    }

    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <h1>Add Service</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" type="file" onChange={handleImageUpload} />
                        <br /><br />
                        <input className="form-control" placeholder="Service Title" {...register("title", { required: true })} />
                        <br />
                        {errors.title && <span style={{ color: 'red' }}>This field is required</span>}
                        <br />
                        <input className="form-control" placeholder="Description" {...register("description", { required: true })} />
                        <br />
                        {errors.description && <span style={{ color: 'red' }}>This field is required</span>}
                        <br />
                        <input className="form-control" placeholder="Service Cost" {...register("cost", { required: true })} />
                        <br />
                        {errors.cost && <span style={{ color: 'red' }}>This field is required</span>}
                        <br />
                        <input className="btn btn-outline-success" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;