import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({ pricing }) => {
    const {name, price, description, features} = pricing;
    return (
        <div className=' flex flex-col rounded-2xl p-4 shadow-lg bg-amber-500'>
            {/* card header */}
            <div>
                <h1 className=' text-7xl'>{name}</h1>
                <h1 className=' text-3xl'>{price}</h1>
            </div>
            <div className=' rounded-2xl mt-10 bg-amber-400 p-3 flex-1'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeatures key={index} features={feature} />)

                }
            </div>
            <button className="btn btn-active btn-secondary w-full mt-4">Subscribe</button>
        </div>
    );
};

export default PricingCard;