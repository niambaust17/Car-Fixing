import React from 'react';

const Testimonial = ({ review }) =>
{
    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{review.name}</h5>
                    <h6 className="card-text">{review.address}</h6>
                    <p className="card-text">{review.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;