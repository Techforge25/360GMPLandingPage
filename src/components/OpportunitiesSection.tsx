import React from 'react';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

// Mockup Images (Final Paths)
const mockupImages = {
    front: '/images/marketplace-dashboard.png',
    back: '/images/marketplace-dashboard2.png',
};

// Feature Card Data (Same)
const B2BFeatures = [
    'Bulk buying & selling',
    'Job posting & hiring',
    'Escrow-secured payments',
];
const B2CFeatures = [
    'Job search & services',
    'Buy & sell products',
    'Protected checkout',
];
// Feature Card Component (Same)
const FeatureCard: React.FC<{ title: string, description: string, features: string[] }> = ({ title, description, features }) => (
    // Note: Reverting gap-3 back as requested in the input
    <div className="bg-white p-8 rounded-xl shadow-lg ring-1 ring-gray-100 min-h-[250px] flex flex-col">
        <h3 className="manrope text-xl font-bold text-[#202939] tracking-normal mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        <div className="space-y-3 mt-auto">
            {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-800 text-sm font-medium">{feature}</span>
                </div>
            ))}
        </div>
    </div>
);


const OpportunitiesSection: React.FC = () => {
    const MOCKUP_WIDTH = 1000;
    const MOCKUP_HEIGHT = 800;

    return (
        <section className="py-6 md:py-32 w-full relative bg-gray-50 overflow-hidden" id="opportunities">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between lg:gap-x-20">
                <div className="lg:w-6/12 xl:w-7/12 relative flex justify-center lg:justify-start min-h-[550px] lg:min-h-[550px] mb-16 lg:mb-0">
                    <div className="relative w-full max-w-[700px] mt-10 lg:mt-0 h-auto lg:h-[550px]">
                        <div className="absolute top-0 left-1/2 w-[90%] max-w-[600px] z-10 hidden lg:block lg:[transform:translate(-40%,0%)_rotate(0deg)] lg:origin-top-left lg:top-0">
                            <Image
                                src={mockupImages.back}
                                alt="Marketplace Back Screenshot"
                                width={MOCKUP_WIDTH}
                                height={MOCKUP_HEIGHT}
                                quality={90}
                                className="w-full h-auto rounded-xl"
                            />
                        </div>

                        <div className="relative w-[90%] max-w-[550px] mx-auto lg:absolute lg:top-[50px] lg:left-1/2 lg:[transform:translate(-95%,20%)]">
                            <Image
                                src={mockupImages.front}
                                alt="Marketplace Front Screenshot"
                                width={MOCKUP_WIDTH}
                                height={MOCKUP_HEIGHT}
                                quality={100}
                                className="w-full h-auto rounded-xl"
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:w-6/12 xl:w-5/12 text-center lg:text-left">

                    <p className="text-sm font-semibold text-purple-700 uppercase tracking-wider mb-3 bg-purple-100 w-fit px-3 py-1 rounded-full mx-auto lg:mx-0">
                        Smooth onboarding
                    </p>

                    <h2 className="manrope text-4xl md:text-5xl font-bold text-[#202939] tracking-normal mb-8 leading-tight">
                        One Marketplace. <br />Multiple Opportunities.
                    </h2>

                    <p className="mx-auto text-[#697586] lg:mx-0 mb-12 text-lg">
                        A flexible marketplace designed to support both product-based
                        and service-based transactions. Whether you are buying in
                        bulk or offering professional services, the platform adapts
                        to your business needs.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <FeatureCard
                            title="B2B Marketplace"
                            description="Built for businesses that need scale and security."
                            features={B2BFeatures}
                        />
                        <FeatureCard
                            title="B2C Marketplace"
                            description="Simple marketplace for everyday users."
                            features={B2CFeatures}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OpportunitiesSection;