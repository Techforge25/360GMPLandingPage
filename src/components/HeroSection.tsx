"use client";
import React, { useMemo } from "react";
import Image from "next/image";

const heroDetails = {
    badge: "ENTERPRISE GLOBAL LAUNCH",
    heading: "The Infrastructure for Global Trade, Strategic Partnerships, and Cross-Border Growth",
    subheading:
        "360 Global Marketplace connects businesses, institutions, and governments worldwide - enabling secure transactions, strategic alliances, and economic expansion on one unified platform.",
    supporting: "Built for global commerce. Designed for institutional scale. Trusted for cross-border growth.",
    centerImageSrc: "/images/hero-web.png",
};

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
    </svg>
);

const HeroSection = () => {
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const headerOffset = 84;
        const rect = el.getBoundingClientRect();
        const offsetTop = window.scrollY + rect.top - headerOffset;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
    };

    const particles = useMemo(
        () =>
            Array.from({ length: 16 }, (_, i) => {
                const size = Math.random() * 3 + 2;
                return {
                    id: i,
                    size,
                    left: Math.random() * 100,
                    top: Math.random() * 100,
                    duration: Math.random() * 14 + 12,
                    delay: Math.random() * 6,
                };
            }),
        []
    );

    return (
        <section id="home" className="relative pt-28 md:pt-40 pb-20 overflow-hidden min-h-screen bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f7f4ff] to-white"></div>
            <div className="absolute -top-40 -right-20 w-[520px] h-[520px] bg-[#9747FF]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-20 w-[520px] h-[520px] bg-[#9747FF]/10 rounded-full blur-3xl"></div>

            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute inset-0 animate-grid-drift"
                    style={{
                        backgroundImage: "linear-gradient(to right, rgba(151, 71, 255, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(151, 71, 255, 0.12) 1px, transparent 1px)",
                        backgroundSize: "140px 140px",
                    }}
                ></div>
            </div>

            <div className="absolute inset-0 opacity-30">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="absolute rounded-full"
                        style={{
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            left: `${p.left}%`,
                            top: `${p.top}%`,
                            background: "radial-gradient(circle, rgba(151, 71, 255, 0.45), transparent)",
                            animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
                        }}
                    ></div>
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    <div
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 animate-fade-in-up"
                        style={{
                            background: "rgba(255, 255, 255, 0.9)",
                            border: "1px solid rgba(151, 71, 255, 0.2)",
                            boxShadow: "0 10px 24px rgba(151, 71, 255, 0.12)",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-sm"></span>
                        <span className="text-[#240457] text-xs md:text-sm font-semibold tracking-[0.2em]">{heroDetails.badge}</span>
                    </div>

                <div
                    className="inline-flex items-center gap-3 rounded-full border border-[#9747FF]/20 bg-white/80 px-5 py-2 text-sm md:text-base text-[#240457] shadow-sm backdrop-blur animate-fade-in-up"
                    style={{ animationDelay: "0.5s" }}
                >
                    <span className="h-2 w-2 rounded-full bg-[#9747FF]"></span>
                    <span>{heroDetails.supporting}</span>
                </div>

                <h1
                    className="text-5xl sm:text-6xl lg:text-7xl font-semibold max-w-5xl tracking-tight text-balance leading-tight mb-7 mt-6 animate-fade-in-up"
                    style={{
                        color: "#240457",
                        animationDelay: "0.2s",
                    }}
                >
                    {heroDetails.heading}
                </h1>

                <p
                    className="text-base md:text-lg text-gray-600 max-w-3xl px-2 leading-relaxed mb-10 animate-fade-in-up"
                    style={{
                        animationDelay: "0.4s",
                    }}
                >
                    {heroDetails.subheading}
                </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="group relative inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
                            style={{
                                background: "linear-gradient(135deg, #7a3ff5 0%, #9747FF 100%)",
                                boxShadow: "0 16px 30px rgba(151, 71, 255, 0.25)",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            <span className="relative z-10 text-white">Enter the Global Marketplace</span>
                            <ArrowRightIcon className="relative z-10 w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
                        </button>
                        <button
                            onClick={() => scrollToSection("platform-overview")}
                            className="group relative inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-[1.02] overflow-hidden bg-white"
                            style={{
                                border: "1px solid rgba(36, 4, 87, 0.15)",
                                boxShadow: "0 12px 24px rgba(15, 15, 25, 0.08)",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9747FF]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            <span className="relative z-10 text-[#240457]">Explore the Platform</span>
                            <ArrowRightIcon className="relative z-10 w-5 h-5 text-[#240457] transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>

                <div className="relative mx-auto max-w-6xl animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                    <div className="absolute -inset-8 bg-gradient-to-r from-purple-200/40 via-indigo-200/30 to-purple-200/40 rounded-[40px] blur-3xl opacity-60"></div>
                    <div
                        className="relative p-2 rounded-[28px] bg-white"
                        style={{
                            border: "1px solid rgba(36, 4, 87, 0.08)",
                            boxShadow: "0 30px 70px -40px rgba(36, 4, 87, 0.35)",
                        }}
                    >
                        <Image
                            src={heroDetails.centerImageSrc}
                            width={1120}
                            height={700}
                            quality={100}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1120px"
                            priority
                            alt="360 GMP Platform Mockup"
                            className="rounded-2xl"
                        />
                    </div>

                    <div className="absolute -left-6 top-10 hidden lg:block animate-float-slow">
                        <div className="bg-white border border-[#9747FF]/15 rounded-2xl p-5 w-52 shadow-lg">
                            <p className="text-xs uppercase tracking-[0.25em] text-[#240457]">Trade Flow</p>
                            <p className="text-lg font-semibold text-[#240457] mt-2">$4.8B</p>
                            <p className="text-xs text-gray-500 mt-1">Secured volume</p>
                            <div className="mt-4 h-1 w-full rounded-full bg-gray-100">
                                <div className="h-1 w-3/5 rounded-full bg-gradient-to-r from-[#9747FF] to-[#7a3ff5]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -right-8 bottom-16 hidden lg:block animate-float-slower">
                        <div className="bg-white border border-[#9747FF]/15 rounded-2xl p-5 w-60 shadow-lg">
                            <p className="text-xs uppercase tracking-[0.25em] text-[#240457]">Partner Match</p>
                            <p className="text-sm text-gray-600 mt-2">Verified supplier network</p>
                            <div className="mt-4 space-y-2">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                                        <span className="text-xs text-gray-600">{`Tier ${i + 1} clearance`}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float-particle {
                    0%, 100% { transform: translate(0, 0); opacity: 0.35; }
                    50% { transform: translate(16px, -22px); opacity: 0.7; }
                }

                @keyframes grid-drift {
                    0% { background-position: 0 0; }
                    100% { background-position: 140px 140px; }
                }

                .animate-grid-drift {
                    animation: grid-drift 48s linear infinite;
                }

                .animate-fade-in-up {
                    animation: fadeInUp 1s ease-out both;
                }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes float-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-14px); }
                }

                @keyframes float-slower {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-18px); }
                }

                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }

                .animate-float-slower {
                    animation: float-slower 7s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;
