import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

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
        <section className="services text-center">
            <div className="blur">
                <div className="container py-5">
                    <h1 className="pb-5">Services</h1>
                    <div className="row row-cols-1 row-cols-xl-4 row-cols-md-2 row-cols-sm-1 g-4">
                        {
                            services.map(service => <Service key={service._id} service={service} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;