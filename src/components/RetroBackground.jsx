import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

const RetroBackground = () => {
    const { scrollY } = useScroll();

    // Use motion values for mouse position to avoid React re-renders
    const mouseX = useMotionValue(0);

    // Parallax transforms
    const sunY = useTransform(scrollY, [0, 8000], [0, 300]);
    const mountainsY = useTransform(scrollY, [0, 2000], [0, 100]);

    // Derived motion values for transforms (no re-renders)
    const sunX = useTransform(mouseX, v => v * -1);
    const mountainsX = useTransform(mouseX, v => v * 0.5);

    useEffect(() => {
        let rafId = null;
        let latestX = 0;
        let ticking = false;

        const handleMouseMove = (e) => {
            latestX = (e.clientX / window.innerWidth - 0.5) * 20;
            if (!ticking) {
                ticking = true;
                rafId = requestAnimationFrame(() => {
                    mouseX.set(latestX);
                    ticking = false;
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [mouseX]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-[#050510] pointer-events-none">

            {/* Stars / Noise layer */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-slate-900 via-[#050510] to-black opacity-80" />

            {/* The Sun */}
            <motion.div
                initial={{ opacity: 0, top: "20%" }}
                animate={{ opacity: 1, top: "5%" }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{ y: sunY, x: sunX }}
                className="absolute left-1/2 md:left-[calc(50%+3rem)] -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-linear-to-b from-[#ff3300] to-[#990099] shadow-[0_0_100px_rgba(255,0,255,0.3)] z-0"
            >
                {/* Sun Stripes */}
                <div
                    className="absolute inset-0 w-full h-full rounded-full"
                    style={{
                        background: "repeating-linear-gradient(to bottom, transparent 0%, transparent 80%, #050510 80%, #050510 100%)",
                        backgroundSize: "100% 40px"
                    }}
                />
            </motion.div>

            {/* Mountains - SVG Layer */}
            <motion.div
                style={{ y: mountainsY, x: mountainsX }}
                className="absolute bottom-[20%] left-0 right-0 z-10 w-full"
            >
                <svg viewBox="0 0 1440 320" className="w-full opacity-90 block" preserveAspectRatio="none">
                    {/* Far Mountains */}
                    <path fill="#1a1a2e" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,213.3C840,203,960,149,1080,144C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    {/* Near Mountains */}
                    <path fill="#0a0a12" fillOpacity="1" d="M0,288L80,272C160,256,320,224,480,229.3C640,235,800,277,960,277.3C1120,277,1280,235,1360,213.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </motion.div>

            {/* Horizon Blocker */}
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-[#050510] z-15" />

            {/* Moving Grid Floor */}
            <div className="absolute bottom-[-50%] left-[-50%] right-[-50%] h-full z-20 perspective-grid-container">
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
