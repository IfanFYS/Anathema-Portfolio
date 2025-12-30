import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const [textColor, setTextColor] = useState('text-[#FFFF00]'); // Start with Yellow for UI
    const [isProfileHovered, setIsProfileHovered] = useState(false);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden pt-20 pb-10">

            {/* Decorative localized glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[100px] rounded-full z-0 pointer-events-none" />

            <div className="max-w-7xl w-full z-10 flex flex-col items-center gap-8">

                {/* Top: System Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-4 bg-black border border-[#00FFFF] text-[#00FFFF] text-sm font-bold tracking-widest uppercase shadow-[0_0_10px_#00FFFF]">
                        System Online
                    </span>
                </motion.div>

                {/* Main Content Grid: Image & Text */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 w-full">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 max-w-2xl"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-none select-none">
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00FFFF] via-[#FF00FF] to-[#39FF14] animate-gradient-x bg-300% drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                                FATHAN
                            </span>
                            <br />
                            <span className="text-white drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">YAZID</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#BC13FE] to-[#00FFFF] bg-300%">
                                SATRIANI
                            </span>
                        </h1>

                        {/* Typewriter Role */}
                        <div className="text-lg md:text-2xl mb-8 font-mono min-h-[80px] flex items-start w-full justify-center lg:justify-start leading-relaxed">
                            <TypeAnimation
                                sequence={[
                                    () => setTextColor('text-[#FFFF00]'), // Yellow for UI
                                    '> 3RD YEAR COMPUTER ENGINEERING \n@ UNIVERSITAS INDONESIA',
                                    2000,
                                    () => setTextColor('text-[#00FFFF]'), // Cyan for Pharos
                                    '> AI & MECHATRONICS ENGINEER \n@ PT. PHAROS INDONESIA',
                                    2000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                style={{ whiteSpace: 'pre-line', display: 'block' }}
                                className={`font-bold uppercase tracking-wide ${textColor} transition-colors duration-300 block text-center lg:text-left first-line:text-white`}
                            />
                        </div>

                        <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed font-sans mt-2">
                            Hi, I'm <strong className="text-white">Ifan</strong>. I'm a <strong className="text-white">20-year-old</strong> developer based in <strong className="text-white">South Jakarta</strong>.
                            I sit at the intersection of <strong className="text-[#00FFFF]">Software Engineering</strong> and <strong className="text-[#39FF14]">IoT/Embedded Systems</strong>,
                            with a growing interest in <strong className="text-[#FF00FF]">Networking/Cybersecurity</strong>. Besides computers, my hobbies include hitting the <strong className="text-white">gym</strong>, going on a <strong className="text-white">run</strong>, and playing online <strong className="text-white">video games</strong>.
                        </p>

                        {/* Mobile Buttons (Smaller & Below Bio) */}
                        <div className="flex flex-col w-full gap-4 lg:hidden mt-8">
                            <a
                                href="/cv.pdf"
                                className="group relative px-6 py-3 bg-black text-[#00FFFF] border border-[#00FFFF] font-bold uppercase tracking-wider overflow-hidden hover:text-black transition-all duration-100 text-center active:scale-95 text-sm"
                                download
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black group-active:text-black transition-colors">
                                    <Download size={18} />
                                    Download CV
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
                        className="order-1 lg:order-2 flex flex-col items-center gap-8"
                    >
                        {/* Profile Picture with Tap Toggle on Mobile */}
                        <div
                            className="w-64 h-64 md:w-80 md:h-80 relative group cursor-pointer"
                            onClick={() => setIsProfileHovered(!isProfileHovered)}
                            onMouseEnter={() => setIsProfileHovered(true)}
                            onMouseLeave={() => setIsProfileHovered(false)}
                        >
                            {/* Animated Neon Glow Behind */}
                            <div className={`absolute inset-0 bg-gradient-to-tr from-[#00FFFF] via-[#FF00FF] to-[#39FF14] rounded-2xl blur-2xl animate-pulse transition-opacity duration-500 ${isProfileHovered ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`} />

                            {/* The Image */}
                            <img
                                src="/assets/profile1.jpg"
                                alt="Fathan Yazid Satriani"
                                className={`w-full h-full object-cover rounded-2xl border-2 border-white/20 relative z-10 bg-zinc-900 shadow-2xl transition-all duration-500 ${isProfileHovered ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`}
                            />

                            {/* Corner Accents */}
                            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-[#00FFFF] z-20" />
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-[#FF00FF] z-20" />
                        </div>

                        {/* Desktop Buttons Stack (Hidden on Mobile) */}
                        <div className="hidden lg:flex flex-col w-full gap-4">
                            <a
                                href="/cv.pdf"
                                className="group relative px-8 py-4 bg-black text-[#00FFFF] border border-[#00FFFF] font-bold uppercase tracking-wider overflow-hidden hover:text-black transition-all duration-100 text-center active:scale-95"
                                download
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black group-active:text-black transition-colors">
                                    <Download size={20} />
                                    Download CV
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
