import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm';


const stripePromise = loadStripe('pk_test_51Ie0g4F1kZfBfl2Au3zUOKgnimymH4Ulgb77fGRCfzC9Ah57VqRZfxVWBuSTzlqM8X8lgn6IkrZaop577dLSCBeN00AF9W9FEb');

const ProcessPayment = ({ handlePayment }) =>
{
    return (
        <Elements stripe={stripePromise}>
            <CardForm handlePayment={handlePayment} />
        </Elements>
    );
};

export default ProcessPayment;