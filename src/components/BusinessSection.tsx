import React from 'react';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

// Features data 
const features = [
    'Create Business Profiles',
    'Post Jobs & Hire Faster',
    'Sell Products & Services',
    'Escrow-Based Payments',
    'Dispute Management System',
    'Performance Analytics',
    'Team & Role Management',
];

// Mockup images
const mockupImages = {
    main: '/images/marketplace3.png',
    overlay: '/images/marketplace2.png',
};

// Reusable Feature Item Component (Content changes here)
const FeatureItem: React.FC<{ feature: string }> = ({ feature }) => (
    <div className="flex items-start text-left">
        <CheckCircleIcon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
        <span className="ml-3 text-gray-800 font-medium whitespace-nowrap">
            {feature}
        </span>
    </div>
);


const BusinessSection: React.FC = () => {
    const half = Math.ceil(features.length / 2);
    const leftFeatures = features.slice(0, half);
    const rightFeatures = features.slice(half);

    // const MOCKUP_WIDTH = 900;
    // const MOCKUP_HEIGHT = 750;

    return (
        <section className="py-6 md:py-12 relative bg-white overflow-hidden" id="marketplace">
            <div className="w-full max-w-[90%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between lg:gap-x-20">

                {/* Left Side: Text and Features (Sizing adjusted for better contrast) */}
                <div className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0">
                    <p className="text-sm font-semibold text-purple-700 uppercase tracking-wider mb-3 bg-purple-100 w-fit px-3 py-1 rounded-full mx-auto lg:mx-0">
                        Smooth onboarding
                    </p>
                    <h2 className="manrope text-4xl md:text-5xl font-extrabold text-[#202939] tracking-tight mb-6 leading-tight">
                        Buy & Sell Smarter in One Unified Marketplace
                    </h2>
                    <p className="text-gray-600 max-w-lg lg:max-w-none mx-auto lg:mx-0 mb-10 text-lg">
                        Connect directly with verified buyers and sellers on a powerful
                        marketplace built for both B2B and B2C transactions. From bulk
                        products to professional services, everything happens in one
                        secure, transparent, and scalable platform.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 max-w-lg mx-auto lg:mx-0">
                        <div className="flex flex-col space-y-4 items-start">
                            {leftFeatures.map((feature, index) => (
                                <FeatureItem key={`l-${index}`} feature={feature} />
                            ))}
                        </div>
                        <div className="flex flex-col space-y-4 items-start">
                            {rightFeatures.map((feature, index) => (
                                <FeatureItem key={`r-${index}`} feature={feature} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 relative flex justify-center lg:justify-end min-h-[400px] lg:min-h-[700px] mt-10 lg:mt-0">

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -z-10 opacity-40"></div>

                    <div className="relative w-full">
                        <Image
                            src={mockupImages.main}
                            alt="Marketplace Main Screenshot"
                            width={1100}
                            height={900}
                            quality={100}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1100px"
                            className="w-full h-auto object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSection;