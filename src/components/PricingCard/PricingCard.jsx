import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({ pricing }) => {
    const {name, price, description, features} = pricing;
    return (
        <div className=' rounded-2xl p-4 shadow-lg bg-amber-500'>
            {/* card header */}
            <div>
                <h1 className=' text-7xl'>{name}</h1>
                <h1 className=' text-3xl'>{price}</h1>
            </div>
            <div className=' rounded-2xl mt-10 bg-amber-400 p-3'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeatures key={index} features={feature} />)

                }
            </div>
        </div>
    );
};

export default PricingCard;