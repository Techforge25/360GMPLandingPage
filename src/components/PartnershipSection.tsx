import React from "react";
import Image from "next/image";

export const PartnershipSection: React.FC = () => {
    return (
        <section className="relative w-full overflow-hidden py-24 bg-[#F8F9FF]">
            {/* Background Gradient/Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[80px] mix-blend-multiply"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-100/50 rounded-full blur-[80px] mix-blend-multiply"></div>
                <div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-pink-100/30 rounded-full blur-[60px] mix-blend-multiply"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-[#1a0737] text-4xl md:text-[52px] font-bold mb-6 tracking-tight leading-[1.15]">
                        Secure Escrow Payments
                    </h2>
                    <p className="text-[#52525b] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
                        Protect your transactions with milestone-based escrow. Funds are released only when work is approved, ensuring safety for both businesses and professionals.
                    </p>
                </div>

                {/* Main Content Area */}
                <div className="relative w-full min-h-[500px] md:min-h-[850px] mt-10">

                    {/* 1. Back Image (Top Right - Desktop View) */}
                    <div className="absolute top-0 right-[-5%] md:right-0 w-[90%] md:w-[72%] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] rounded-xl border border-gray-100/50 z-10 bg-white">
                        <Image
                            src="/images/escrow.png"
                            alt="Marketplace Dashboard"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-xl"
                            priority
                        />
                    </div>

                    {/* 2. Front Image (Bottom Left - Mobile/Tablet View) */}
                    <div className="absolute top-[200px] md:top-[320px] left-[-5%] md:left-0 w-[90%] md:w-[62%] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] rounded-xl border border-gray-100/50 z-20 bg-white">
                        <Image
                            src="/images/escrow2.png"
                            alt="Order Details"
                            width={1000}
                            height={700}
                            className="w-full h-auto rounded-xl"
                        />
                    </div>


                    {/* --- Tags & Connectors (Visible on MD+) --- */}
                    <div className="hidden md:block absolute inset-0 pointer-events-none z-30">
                        {/* User Tag */}
                        <div className="absolute top-[120px] left-[18%] animate-float-slow">
                            <div className="relative group">
                                {/* Tag Badge */}
                                <div className="px-8 py-3 bg-[#a5b4fc] rounded-2xl shadow-lg text-white text-lg font-semibold flex items-center justify-center min-w-[120px] backdrop-blur-md border border-white/30"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.9) 0%, rgba(129, 140, 248, 0.9) 100%)',
                                        boxShadow: '0 8px 32px 0 rgba(139, 92, 246, 0.25)'
                                    }}>
                                    User
                                </div>
                                {/* Connector Line to Back Image */}
                                <svg className="absolute top-full left-1/2 w-[150px] h-[80px] text-[#A78BFA]" style={{ overflow: 'visible', transform: 'translateX(-5px)' }}>
                                    <path
                                        d="M 5 5 Q 30 70 140 70"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeDasharray="6 6"
                                        strokeLinecap="round"
                                        className="opacity-80"
                                    />
                                    <circle cx="140" cy="70" r="4" fill="currentColor" />
                                </svg>
                            </div>
                        </div>

                        {/* Business Tag */}
                        <div className="absolute top-[250px] left-[2%] lg:bottom-[20%] animate-float-delayed">
                            <div className="relative group">
                                {/* Tag Badge */}
                                <div className="px-8 py-3 bg-[#c084fc] rounded-2xl shadow-lg text-white text-lg font-semibold flex items-center justify-center min-w-[130px] backdrop-blur-md border border-white/30"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(192, 132, 252, 0.9) 0%, rgba(167, 139, 250, 0.9) 100%)',
                                        boxShadow: '0 8px 32px 0 rgba(168, 85, 247, 0.25)'
                                    }}>
                                    Business
                                </div>
                                {/* Connector Line to Front Image */}
                                <svg className="absolute top-1/2 left-full w-[100px] h-[5px] text-[#C084FC]" style={{ overflow: 'visible', transform: 'translate(0, -50%)' }}>
                                    <path
                                        d="M 5 0 C 40 0 50 40 90 40"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeDasharray="6 6"
                                        strokeLinecap="round"
                                        className="opacity-80"
                                    />
                                    <circle cx="90" cy="40" r="4" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PartnershipSection;