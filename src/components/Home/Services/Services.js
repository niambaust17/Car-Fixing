import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () =>
{
    const [services, setServices] = useState([])

    useEffect(() =>
    {
        fetch(`https://boiling-reaches-73904.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="container text-center">
            <h1 className="my-5">Services</h1>
            <div className="row row-cols-1 row-cols-xl-4 row-cols-md-2 row-cols-sm-1 g-4">
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </div>
        </section>
    );
};

export default Services;