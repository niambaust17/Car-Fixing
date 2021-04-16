import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () =>
{
    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    
                </div>
            </div>
        </div>
    );
};

export default Dashboard;