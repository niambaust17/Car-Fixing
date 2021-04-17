import React from 'react';

const Expert = ({ expert }) =>
{
    return (
        <div className="col">
            <div className="card h-100 border-0" style={{ backgroundColor: '#AED6F1' }}>
                <img src={expert.photo} className="card-img-top" alt="..." style={{ padding: '15px', borderRadius: '10px' }} />
                <div className="card-body">
                    <h5 className="card-title">{expert.name}</h5>
                    <p className="card-text">{expert.describe}</p>
                </div>
            </div>
        </div>
    );
};

export default Expert;