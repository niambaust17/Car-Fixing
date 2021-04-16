import React from 'react';
import './HeaderMain.css';

const HeaderMain = () =>
{
    return (
        <main className="text-center mt-5 pt-5 px-3">
            <h1>GET YOUR DESIRED<br /><span className="header-title">CAR SERVICE</span></h1>
            <h5 className="text-secondary">We provides always our best services for our clients and always try to achieve our client's trust and satisfaction.</h5>
            <button className="btn btn-outline-success">View Details</button>
        </main>
    );
};

export default HeaderMain;