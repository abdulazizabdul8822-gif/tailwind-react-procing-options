import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOption = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise)
    console.log(pricingData)

    return (
        <div className='min-h-screen flex flex-col items-center justify-center px-10 py-10'>
            <h2 className=' text-5xl mb-10'>Get our Membership</h2>
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {/* {
                    pricingData.pricingOptions.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                } */}

                {
                    pricingData.pricingOptions.map(pricing => <DaisyPricing
                    key={pricing.id}
                    pricing={pricing}
                    ></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOption;