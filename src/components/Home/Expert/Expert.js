import React from 'react';

const Expert = ({ expert }) =>
{
    return (
        <div className="col">
            <div className="card h-100">
                <img src={expert.photo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{expert.name}</h5>
                    <p className="card-text">{expert.describe}</p>
                </div>
            </div>
        </div>
    );
};

export default Expert;