import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOption = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise)
    console.log(pricingData)

    return (
        <div className='min-h-screen flex flex-col items-center justify-center px-10 py-10 text-white'>
            <h2 className=' text-5xl mb-10'>Get our Membership</h2>
            <div className=' grid grid-cols-3 gap-8 '>
                {
                    pricingData.pricingOptions.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOption;