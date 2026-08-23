import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, MapPin } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const [textColor, setTextColor] = useState('text-[#FFFF00]'); // Start with Yellow for UI
    const [isProfileHovered, setIsProfileHovered] = useState(false);

    const sequence = useMemo(() => [
        () => setTextColor('text-[#FFFF00]'), // Yellow for UI
        '> 4TH YEAR COMPUTER ENGINEERING \n@ UNIVERSITAS INDONESIA',
        2000,
        '', // Ensure deletion finishes before color change
        () => setTextColor('text-[#00FFFF]'), // Cyan for NTUST
        '> EX-5G NETWORKS & CYBERSEC INTERN \n@ BMW LAB NTUST',
        2000,
        '',
        () => setTextColor('text-[#39FF14]'), // Green for Pharos
        '> EX-AI & MECHATRONICS INTERN \n@ PT. PHAROS INDONESIA',
        2000,
        ''
    ], []);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden pt-20 pb-16">

            <div className="max-w-7xl w-full z-10 flex flex-col items-center gap-8">

                {/* Main Content Grid: Image & Text */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 w-full">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 max-w-2xl"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none select-none text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]">
                            FATHAN
                            <br />
                            YAZID
                            <br />
                            SATRIANI
                        </h1>

                        {/* Typewriter Role */}
                        <div className={`text-lg md:text-2xl font-mono min-h-[82px] flex items-start w-full justify-center lg:justify-start leading-relaxed ${textColor} transition-colors duration-300 drop-shadow-[0_0_5px_currentColor]`}>
                            <TypeAnimation
                                sequence={sequence}
                                wrapper="span"
                                speed={75}
                                deletionSpeed={75}
                                repeat={Infinity}
                                style={{ whiteSpace: 'pre-line', display: 'block' }}
                                className="font-bold uppercase tracking-wide block text-center lg:text-left first-line:text-white"
                            />
                        </div>

                        <p className="text-white text-lg md:text-xl max-w-xl leading-relaxed font-sans mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                            Hi there! My nickname is <strong className="text-[#FF3131]">Ifan</strong>. I'm a computer engineering student from <strong className="text-[#FFFF00]">Universitas Indonesia</strong> building across <strong>software</strong>, <strong>AI</strong>, and <strong>embedded systems</strong>.
                            I have completed internships spanning AI, mechatronics, and full-stack software at <strong className="text-[#39FF14]">PT. Pharos Indonesia</strong>, and O-RAN & 5G/B5G network security research with <strong className="text-[#00FFFF]">BMW Lab in NTUST</strong> Taiwan through the TEEP Program.
                        </p>

                        {/* Mobile Buttons (Smaller & Below Bio) */}
                        <div className="flex flex-col w-full gap-4 lg:hidden mt-8">
                            <a
                                href="/CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-6 py-3 bg-black text-[#00FFFF] border border-[#00FFFF] font-bold uppercase tracking-wider overflow-hidden hover:text-black transition-all duration-100 text-center active:scale-95 text-sm"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black group-active:text-black transition-colors">
                                    <Download size={18} />
                                    View CV
                                </span>
                                <div className="absolute inset-0 bg-[#00FFFF] transform -translate-x-full group-hover:translate-x-0 group-active:translate-x-0 transition-transform duration-200 ease-out z-0" />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 animate-pulse bg-[#00FFFF]/50 z-[-1]" />
                            </a>

                            <a
                                href="#projects"
                                className="group relative px-6 py-3 bg-black text-[#FF00FF] border border-[#FF00FF] font-bold uppercase tracking-wider overflow-hidden hover:text-black transition-all duration-100 text-center active:scale-95 text-sm"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black group-active:text-black transition-colors">
                                    View Projects
                                    <ArrowRight size={18} />
                                </span>
                                <div className="absolute inset-0 bg-[#FF00FF] transform translate-x-full group-hover:translate-x-0 group-active:translate-x-0 transition-transform duration-200 ease-out z-0" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Profile Picture & Buttons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="order-1 lg:order-2 flex flex-col items-center gap-5 lg:gap-8"
                    >
                        <div className="inline-flex items-center gap-2 border border-[#00FFFF]/30 bg-black/70 px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#00FFFF] shadow-[0_0_24px_rgba(0,255,255,0.12)]">
                            <MapPin size={14} />
                            Jakarta - Taipei
                        </div>

                        {/* Profile Picture with Tap Toggle on Mobile */}
                        <div
                            className="w-64 h-64 md:w-80 md:h-80 relative group cursor-pointer"
                            onClick={() => setIsProfileHovered(!isProfileHovered)}
                            onMouseEnter={() => setIsProfileHovered(true)}
                            onMouseLeave={() => setIsProfileHovered(false)}
                        >
                            {/* Animated Neon Glow Behind */}
                            <div className={`absolute inset-0 bg-linear-to-tr from-[#00FFFF] via-[#FF00FF] to-[#39FF14] rounded-lg blur-xl transition-opacity duration-500 ${isProfileHovered ? 'opacity-70' : 'opacity-35 group-hover:opacity-70'}`} />

                            {/* The Image */}
                            <img
                                src="/assets/profile_1.jpg"
                                alt="Fathan Yazid Satriani"
                                className="w-full h-full object-cover rounded-lg border border-white/20 relative z-10 bg-zinc-900 shadow-2xl transition-all duration-500"
                            />

                            {/* Corner Accents */}
                            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-[#00FFFF] z-20" />
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-[#FF00FF] z-20" />
                        </div>

                        {/* Desktop Buttons Stack (Hidden on Mobile) */}
                        <div className="hidden lg:flex flex-col w-full gap-4">
                            <a
                                href="/CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-8 py-4 bg-black text-[#00FFFF] border border-[#00FFFF] font-bold uppercase tracking-wider overflow-hidden hover:text-black transition-all duration-100 text-center active:scale-95"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black group-active:text-black transition-colors">
                                    <Download size={20} />
                                    View CV
                                </span>
                                <div className="absolute inset-0 bg-[#00FFFF] transform -translate-x-full group-hover:translate-x-0 group-active:translate-x-0 transition-transform duration-200 ease-out z-0" />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 animate-pulse bg-[#00FFFF]/50 z-[-1]" />
                            </a>

                            <a
                                href="#projects"
                                className="group relative px-8 py-4 bg-black text-[#FF00FF] border border-[#FF00FF] font-bold uppercase tracking-wider overflow-hidden hover:text-black transition-all duration-100 text-center active:scale-95"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black group-active:text-black transition-colors">
                                    View Projects
                                    <ArrowRight size={20} />
                                </span>
                                <div className="absolute inset-0 bg-[#FF00FF] transform translate-x-full group-hover:translate-x-0 group-active:translate-x-0 transition-transform duration-200 ease-out z-0" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
