import React from 'react';
import img from '../../../images/header-bg.jpg';
const Contact = () =>
{
    return (
        <div className="container">
            <h1 className="text-center my-5">Contact</h1>
            <div className="row">
                <div className="col-md-5">
                    <img src={img} alt="" style={{ width: '100%' }} />
                </div>
                <div className="col-md-7">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control mb-3" placeholder="Email Address *" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control mb-3" placeholder="Subject *" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control mb-3" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn btn-primary"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;