import React from 'react';
import { useHistory } from 'react-router';

const Service = ({ service }) =>
{
    const history = useHistory();

    return (
        <div className="col" onClick={() => history.push(`/bookService/${ service.title }`)}>
            <div className="card h-100">
                <img src={service.imageURL} className="card-img-top" alt="..." style={{ height: '200px' }} />
                <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;