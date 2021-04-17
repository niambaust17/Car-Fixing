import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

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
        <section className="container text-center">
            <h1 className="my-5">Testimonials</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    reviews.map(review => <Testimonial key={review._id} review={review} />)
                }
            </div>
        </section>
    );
};

export default Testimonials;