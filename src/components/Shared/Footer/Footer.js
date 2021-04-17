import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'

const Footer = () =>
{
    return (
        <>
            <footer className="bg-dark text-center text-white mt-5">
                <div className="container p-4">
                    <section className="social-media">
                        <Link
                            className="icon mx-2"
                            to="#"
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                        <Link
                            className="icon mx-2"
                            to="#"
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                        <Link
                            className="icon mx-2"
                            to="#"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </Link>
                        <Link
                            className="icon mx-2"
                            to="#"
                        >
                            <FontAwesomeIcon icon={faTelegram} />
                        </Link>
                    </section>
                    <section className="mt-4">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            type="email"
                                            id="form5Example2"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <div className="text-start">
                                    <h5 className="text-uppercase">Opening Hours</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li>Mon-Tue 6.00 am to 10.00 pm</li>
                                        <li>Wed-Thu 8.00 am to 06.00 pm</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <div className="text-start">
                                    <h5 className="text-uppercase">Services</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li>Oil Change</li>
                                        <li>Engine Service</li>
                                        <li>Wheel Alignment</li>
                                        <li>Coloring</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <div className="text-start">
                                    <h5 className="text-uppercase">Tags</h5>
                                    <button className="btn btn-outline-success btn-sm m-2">Oil</button>
                                    <button className="btn btn-outline-success btn-sm m-2">Break</button>
                                    <button className="btn btn-outline-success btn-sm m-2">Engine</button>
                                    <button className="btn btn-outline-success btn-sm m-2">Wheel</button>
                                    <button className="btn btn-outline-success btn-sm m-2">Tires</button>
                                    <button className="btn btn-outline-success btn-sm m-2">Car</button>
                                    <button className="btn btn-outline-success btn-sm m-2">Truck</button>
                                    <button className="btn btn-outline-success btn-sm m-2">Battery</button>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <div className="text-start">
                                    <h5 className="text-uppercase">Quick Contact</h5>
                                    <input className="form-control mb-2" type="email" placeholder="Enter Email" />
                                    <textarea className="form-control" placeholder="Enter Message" cols="30" rows="3"></textarea>
                                    <button className="btn btn-outline-success btn-sm m-2">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </>
    );
};

export default Footer;
