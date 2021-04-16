import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';
import Experts from '../Experts/Experts';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () =>
{
    return (
        <>
            <Header />
            <Services />
            <Experts />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;