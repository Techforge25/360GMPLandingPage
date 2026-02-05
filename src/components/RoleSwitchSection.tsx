import React from 'react';
import Image from 'next/image';
import { ArrowsRightLeftIcon, Squares2X2Icon, ShieldCheckIcon, FingerPrintIcon } from '@heroicons/react/24/outline'; // Icons for features

// Feature Data
const roleFeatures = [
    {
        icon: ArrowsRightLeftIcon,
        title: 'Instant Toggle',
        description: 'Flip between business and personal profiles in a single click.',
    },
    {
        icon: Squares2X2Icon,
        title: 'Separate Dashboards',
        description: 'Each profile keeps its own dashboard, tasks, and settings.',
    },
    {
        icon: ShieldCheckIcon,
        title: 'Secure & Protected',
        description: 'All payments, jobs, and data remain safe during switching.',
    },
    {
        icon: FingerPrintIcon,
        title: 'Unified Account',
        description: 'One login, multiple roles—no need for separate accounts.',
    },
];

const mockupImage = {
    src: '/images/profile.png',
    width: 600,
    height: 400,
};

const FeatureCard: React.FC<{ icon: React.ElementType; title: string; description: string }> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl text-left">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-700 mb-4 flex-shrink-0">
            <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="manrope text-xl font-bold text-[#202939] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);


const RoleSwitchSection: React.FC = () => {
    return (
        <section className="py-16 md:py-32 relative bg-gray-50" id="roles">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div
                    className="relative p-8 md:p-12 lg:p-16 rounded-[2rem] shadow-2xl overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, #A855F7 0%, #6366F1 100%)',
                    }}
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="lg:w-1/2 text-white text-center lg:text-left mb-10 lg:mb-0 lg:pr-10">
                            <h2 className="manrope text-4xl md:text-5xl font-bold tracking-normal mb-6 leading-tight">
                                One Account, <br />Multiple Roles
                            </h2>
                            <p className="text-lg opacity-90 max-w-lg lg:max-w-none mx-auto lg:mx-0">
                                Easily switch between Business and Personal profiles within a single account. Manage jobs, post services, buy or sell products, and handle payments seamlessly. Each profile has its own dashboard and settings, ensuring your activities stay organized, secure, and tailored to your role—no need to create multiple accounts.
                            </p>
                        </div>

                        <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[500px] h-auto p-4 rounded-xl shadow-2xl shadow-indigo-500/30">
                                <Image
                                    src={mockupImage.src}
                                    alt="Profile Switch Dialog Mockup"
                                    width={mockupImage.width}
                                    height={mockupImage.height}
                                    quality={100}
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {roleFeatures.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default RoleSwitchSection;