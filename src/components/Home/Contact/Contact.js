import React from 'react';
import contact from '../../../images/contact.png';
import './Contact.css';

const Contact = () =>
{
    return (
        <section className="contact text-center">
            <div className="blur">
                <div className="container py-5">
                    <h1 className="pb-5">Contact</h1>
                    <div className="row">
                        <div className="col-md-6 pb-2">
                            <img src={contact} alt="" width="100%" height="425px" />
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
                                    <textarea name="" className="form-control mb-3" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                                </div>
                                <div className="form-group text-center">
                                    <button type="button" className="submit-button"> Submit </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;