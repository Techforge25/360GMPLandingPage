import React from "react";
import Image from "next/image";

// Mockup Paths
const mockupImages = {
    escrowModel: "/images/escrow.png",
    sellerShipment: "/images/escrow2.png",
};

// Gradient tag styling
const getTagStyle = (): React.CSSProperties => ({
    background: 'linear-gradient(135deg, rgba(147, 112, 219, 0.85) 0%, rgba(138, 180, 248, 0.85) 100%)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
});

// Arrow SVG Component
const Arrow: React.FC<{ fromTag: 'user' | 'business' }> = ({ fromTag }) => {
    if (fromTag === 'user') {
        // Arrow from User tag to top-right image
        return (
            <svg
                className="absolute top-[15%] left-[25%] w-[200px] h-[100px] pointer-events-none z-25 hidden lg:block"
                viewBox="0 0 200 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M 10 50 Q 100 20, 190 45"
                    stroke="rgba(147, 112, 219, 0.6)"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                />
                <defs>
                    <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="3"
                        orient="auto"
                    >
                        <polygon points="0 0, 10 3, 0 6" fill="rgba(147, 112, 219, 0.6)" />
                    </marker>
                </defs>
            </svg>
        );
    } else {
        // Arrow from Business tag to bottom-left image
        return (
            <svg
                className="absolute bottom-[30%] right-[25%] w-[200px] h-[100px] pointer-events-none z-25 hidden lg:block"
                viewBox="0 0 200 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M 190 50 Q 100 80, 10 55"
                    stroke="rgba(138, 180, 248, 0.6)"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead2)"
                />
                <defs>
                    <marker
                        id="arrowhead2"
                        markerWidth="10"
                        markerHeight="10"
                        refX="0"
                        refY="3"
                        orient="auto"
                    >
                        <polygon points="10 0, 0 3, 10 6" fill="rgba(138, 180, 248, 0.6)" />
                    </marker>
                </defs>
            </svg>
        );
    }
};

export const PartnershipSection: React.FC = () => {
    return (
        <section
            className="relative w-full overflow-hidden py-24 bg-gradient-to-b from-white via-purple-50/20 to-blue-50/20"
            aria-label="Partnership section"
        >
            {/* Header Content */}
            <header className="max-w-4xl mx-auto px-[72px] text-center mb-20">
                <h1 className="manrope text-4xl md:text-5xl font-bold text-[#202939] tracking-normal leading-tight mb-6">
                    In partnership with the top fintech companies
                </h1>
                <p className="text-[#697586] text-base md:text-lg mx-auto max-w-2xl leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>
            </header>

            {/* Full Width Mockup Container with 72px gaps */}
            <div className="relative w-full px-[72px]">
                <div className="relative w-full max-w-7xl mx-auto min-h-[600px] lg:min-h-[750px]">

                    {/* Background Gradient Blobs - Full Width */}
                    <div className="absolute inset-0 overflow-visible pointer-events-none -mx-[72px]" aria-hidden="true">
                        {/* Top Right Purple Blob */}
                        <div className="absolute top-[5%] right-[8%] w-[450px] h-[450px] rounded-full bg-purple-400/35 blur-[130px]"></div>

                        {/* Bottom Left Blue Blob */}
                        <div className="absolute bottom-[5%] left-[8%] w-[500px] h-[500px] rounded-full bg-blue-400/35 blur-[130px]"></div>

                        {/* Center Mix */}
                        <div className="absolute top-[35%] left-[35%] w-[400px] h-[400px] rounded-full bg-indigo-400/25 blur-[110px]"></div>
                    </div>

                    {/* Mockup Images Stack */}
                    <div className="relative w-full h-full">

                        {/* User Tag (Top Left) */}
                        <div
                            className="absolute top-[12%] left-[5%] w-[100px] h-[50px] rounded-lg flex items-center justify-center z-30 hidden lg:flex"
                            style={getTagStyle()}
                        >
                            <span className="font-semibold text-white text-base">
                                User
                            </span>
                        </div>

                        {/* Arrow from User to Top Image */}
                        <Arrow fromTag="user" />

                        {/* Back Mockup (Top Right - Escrow Model) */}
                        <div className="absolute top-0 right-0 w-full max-w-[550px] lg:max-w-[680px] z-10">
                            <Image
                                className="w-full h-auto rounded-xl shadow-2xl ring-1 ring-gray-200/50"
                                alt="Escrow model diagram"
                                src={mockupImages.escrowModel}
                                width={871}
                                height={740}
                                quality={90}
                            />
                        </div>

                        {/* Business Tag (Bottom Right) */}
                        <div
                            className="absolute bottom-[15%] right-[5%] w-[110px] h-[50px] rounded-lg flex items-center justify-center z-30 hidden lg:flex"
                            style={getTagStyle()}
                        >
                            <span className="font-semibold text-white text-base">
                                Business
                            </span>
                        </div>

                        {/* Arrow from Business to Bottom Image */}
                        <Arrow fromTag="business" />

                        {/* Front Mockup (Bottom Left - Seller Shipment) */}
                        <div className="relative lg:absolute lg:top-[320px] lg:left-0 w-full max-w-[500px] lg:max-w-[620px] z-20 mt-8 lg:mt-0">
                            <Image
                                className="w-full h-auto rounded-xl shadow-2xl ring-1 ring-gray-200/50"
                                alt="Seller shipment process"
                                src={mockupImages.sellerShipment}
                                width={675}
                                height={472}
                                quality={100}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnershipSection;