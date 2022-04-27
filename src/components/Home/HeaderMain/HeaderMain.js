import React from 'react';
import './HeaderMain.css';

const HeaderMain = () =>
{
    return (
        <main style={{ minHeight: '100vh', textAlign: 'center', display: 'grid', placeItems: 'center' }}>
            <div className="banner" style={{ width: '100%', maxWidth: '600px', padding: '0 10px' }}>
                <h1>GET YOUR DESIRED</h1>
                <span className="header-title">CAR SERVICE</span>
                <h5>We provides always our best services for our clients and always try to achieve our client's trust and satisfaction.</h5>
                <button className="view-button my-3">View Details</button>
            </div>
        </main>
    );
};

export default HeaderMain;