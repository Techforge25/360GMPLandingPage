import React from 'react';
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

// Contact Info
const contactInfo = [
    { icon: PhoneIcon, title: 'Call', detail: '+123456797-1' },
    { icon: EnvelopeIcon, title: 'Message', detail: 'info@gmail.com' },
    { icon: MapPinIcon, title: 'Location', detail: '70 Washington Square\nSouth, New York, NY 10012, United States' },
];

// Contact Info Card
const ContactInfoCard: React.FC = () => (
    <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden ring-1 ring-purple-200/50">

        <Image
            src="/images/contactus.png"
            alt="Abstract background art"
            layout="fill"
            objectFit="cover"
            className="z-0"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] p-6 rounded-2xl shadow-xl z-10"
            style={{
                // Glassmorphism effect
                background: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
        >
            <div className="space-y-6">
                {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className="flex flex-col items-start">
                            <div className="flex items-center space-x-3 mb-1">
                                <Icon className="w-5 h-5 text-gray-800" />
                                <h4 className="text-gray-900 font-bold text-base">{item.title}</h4>
                            </div>
                            <p className="text-gray-700 ml-8 whitespace-pre-line text-sm leading-tight">
                                {item.detail}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
);

// Contact Form
const ContactForm: React.FC = () => {
    // Reusable Input Field
    const InputField: React.FC<{ label: string; placeholder: string; value: string; fullWidth?: boolean }> = ({ label, placeholder, value, fullWidth }) => (
        <div className={fullWidth ? 'md:col-span-2' : ''}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input type="text" placeholder={placeholder} defaultValue={value} className="w-full px-4 py-3 bg-gray-100/80 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-shadow text-base border-none" />
        </div>
    );
    // Reusable Textarea
    const TextareaField: React.FC = () => (
        <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Tell Us A Bit About Your Business And Your Requirements...</label>
            <textarea rows={5} placeholder="*" className="w-full px-4 py-3 bg-gray-100/80 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-shadow text-base border-none resize-none" />
        </div>
    );

    return (
        <form className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl ring-1 ring-purple-100/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <InputField label="First Name" placeholder="John" value="John" />
                <InputField label="Last Name" placeholder="Doe" value="Doe" />
                <InputField label="Email" placeholder="info@gmail.com" value="info@gmail.com" />
                <InputField label="Phone" placeholder="+123456797-1" value="+123456797-1" />
                <InputField label="Position" placeholder="info@gmail.com" value="info@gmail.com" fullWidth />
                <InputField label="Company" placeholder="360gmp" value="360gmp" fullWidth />
                <TextareaField />
                <div className="md:col-span-2 pt-4">
                    <button type="submit" className="w-full inline-flex items-center justify-center bg-[#4F33A3] text-white font-semibold py-3 rounded-xl hover:bg-[#412a87] transition-colors duration-300 text-lg">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

const ContactSection: React.FC = () => {
    return (
        <section className="py-16 md:py-32 relative bg-gray-50/50" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-12 lg:mb-16">
                    <h2 className="manrope text-4xl md:text-5xl font-extrabold text-[##202939] tracking-normal mb-3">
                        Contact Us
                    </h2>
                    <p className="text-[#697586] text-lg">
                        We’re here to help with demos, support, partnerships and inquiries.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                    {/* Left Side: Contact Info Card */}
                    <div className="lg:col-span-1 h-[600px] hidden lg:block">
                        <ContactInfoCard />
                    </div>
                    {/* Right Side: Contact Form */}
                    <div className="lg:col-span-2 w-full">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;