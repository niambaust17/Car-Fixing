import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () =>
{
    const [adminInfo, setAdminInfo] = useState({});
    const handleBlur = e =>
    {
        const newInfo = { ...adminInfo };
        newInfo[e.target.name] = e.target.value;
        setAdminInfo(newInfo);
    }

    const handleSubmit = (e) =>
    {
        fetch('https://boiling-reaches-73904.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(adminInfo)
        })
            .then(res => res.json())
            .then(data =>
            {
                console.log(data);
            })
        e.preventDefault();
    }

    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <h1>Make Admin</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <input onBlur={handleBlur} type="email" name="email" className="form-control" placeholder="Enter a email" />
                            <button className="btn btn-outline-success" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;