import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () =>
{
    const [reviews, setReviews] = useState([])

    useEffect(() =>
    {
        fetch(`https://boiling-reaches-73904.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="testimonials text-center">
            <div className="blur">
                <div className="container py-5">
                    <h1 className="pb-5">Testimonials</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            reviews.map(review => <Testimonial key={review._id} review={review} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;