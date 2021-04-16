import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () =>
{
    const [services, setServices] = useState([])

    useEffect(() =>
    {
        fetch(`http://localhost:5050/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="container text-center">
            <h1 className="my-5">Services</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </div>
        </section>
    );
};

export default Services;