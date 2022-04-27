import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () =>
{
    return (
        <div className="container">
            <div className="row d-flex">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">

                </div>
            </div>
        </div>
    );
};

export default Dashboard;