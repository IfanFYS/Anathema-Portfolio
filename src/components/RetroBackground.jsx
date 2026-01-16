import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const RetroBackground = () => {
    const { scrollY } = useScroll();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Parallax transforms
    // Parallax transforms - scaled for fuller page length
    // Parallax transforms - scaled for fuller page length
    // Parallax transforms - scaled for fuller page length
    // Sun moves much slower now (0 to 300px over 8000px scroll)
    const sunY = useTransform(scrollY, [0, 8000], [0, 300]);
    const mountainsY = useTransform(scrollY, [0, 2000], [0, 100]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20, // -10 to 10
                y: (e.clientY / window.innerHeight - 0.5) * 10  // -5 to 5
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-[#050510] pointer-events-none">

            {/* Stars / Noise layer */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#050510] to-black opacity-80" />
            <div className="absolute inset-0 opacity-20 bg-[url('/assets/noise.png')] mix-blend-overlay" />

            {/* The Sun - Darker & Less Bright */}
            <motion.div
                initial={{ opacity: 0, top: "20%" }}
                animate={{ opacity: 1, top: "5%" }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{ y: sunY, x: mousePos.x * -1 }}
                // Centered on mobile, shifted right on desktop to account for sidebar
                className="absolute left-1/2 md:left-[calc(50%+3rem)] -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-linear-to-b from-[#ff3300] to-[#990099] shadow-[0_0_100px_rgba(255,0,255,0.3)] z-0"
            >
                {/* Sun Stripes (Scanline mask effect) */}
                <div
                    className="absolute inset-0 w-full h-full rounded-full"
                    style={{
                        background: "repeating-linear-gradient(to bottom, transparent 0%, transparent 80%, #050510 80%, #050510 100%)",
                        backgroundSize: "100% 40px" // Adjust stripe thickness
                    }}
                />
            </motion.div>

            {/* Mountains - SVG Layer */}
            <motion.div
                style={{ y: mountainsY, x: mousePos.x * 0.5 }}
                className="absolute bottom-[20%] left-0 right-0 z-10 w-full"
            >
                <svg viewBox="0 0 1440 320" className="w-full opacity-90 block" preserveAspectRatio="none">
                    {/* Far Mountains */}
                    <path fill="#1a1a2e" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,213.3C840,203,960,149,1080,144C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    {/* Near Mountains */}
                    <path fill="#0a0a12" fillOpacity="1" d="M0,288L80,272C160,256,320,224,480,229.3C640,235,800,277,960,277.3C1120,277,1280,235,1360,213.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </motion.div>

            {/* Horizon Blocker - Occludes Sun when it sets */}
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-[#050510] z-15" />

            {/* Moving Grid Floor */}
            <div className="absolute bottom-[-50%] left-[-50%] right-[-50%] h-[100%] z-20 perspective-grid-container">
                <div className="w-full h-full bg-transparent border-t border-[#FF00FF]/50 grid-floor" />
            </div>

            <style jsx>{`
                .perspective-grid-container {
                    transform: perspective(500px) rotateX(60deg);
                    transform-origin: top;
                }
                .grid-floor {
                    background-image: 
                        linear-gradient(rgba(255, 0, 255, 0.4) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 0, 255, 0.4) 1px, transparent 1px);
                    background-size: 50px 50px;
                    animation: grid-move 2s linear infinite;
                    box-shadow: 0 0 100px rgba(255,0,255,0.3) inset;
                }
                @keyframes grid-move {
                    0% { background-position-y: 0px; }
                    100% { background-position-y: 50px; }
                }
            `}</style>
        </div>
    );
};

export default RetroBackground;
