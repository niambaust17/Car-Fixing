import React from 'react';
import contact from '../../../images/contact.png';

const Contact = () =>
{
    return (
        <section className="container">
            <h1 className="text-center my-5">Contact</h1>
            <div className="row">
                <div className="col-md-6 pb-2">
                    <img src={contact} alt="" width="100%" />
                </div>
                <div className="col-md-6 pb-2">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control mb-3" placeholder="Email Address *" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control mb-3" placeholder="Subject *" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control mb-3" id="" cols="30" rows="8" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn btn-primary"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;