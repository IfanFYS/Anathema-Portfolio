import React, { useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

const RetroBackground = () => {
    const { scrollY } = useScroll();
    const mouseX = useMotionValue(0);

    // Parallax transforms
    const sunY = useTransform(scrollY, [0, 8000], [0, 300]);
    const mountainsY = useTransform(scrollY, [0, 2000], [0, 100]);
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

    // Generate geometric petals around the sun
    const petals = useMemo(() => {
        const count = 8;
        return Array.from({ length: count }, (_, i) => {
            const angle = (360 / count) * i;
            const rad = (angle * Math.PI) / 180;

            // Alternating sizes — fewer, larger petals
            const sizeW = [30, 24, 36, 28, 32, 22, 38, 30][i % 8];
            const sizeH = sizeW * 1.6; // elongated diamond

            // Rotation so the tip always points toward the sun center
            // clip-path top vertex points "up" at rotate(0). To point toward
            // center from orbit angle θ, rotate by (θ - 90°).
            const rotation = angle - 90;

            // Color based on vertical position in the gradient
            // Sun gradient: #ff3300 (top) → #ff0066 (mid) → #cc00cc (bottom)
            // normalizedY: 0 = top of orbit, 1 = bottom
            const normalizedY = (Math.sin(rad) + 1) / 2;
            let r, g, b;
            if (normalizedY <= 0.5) {
                const t = normalizedY * 2;
                r = 255;
                g = Math.round(51 * (1 - t));
                b = Math.round(102 * t);
            } else {
                const t = (normalizedY - 0.5) * 2;
                r = Math.round(255 - 51 * t);
                g = 0;
                b = Math.round(102 + 102 * t);
            }
            const color = `rgb(${r}, ${g}, ${b})`;
            const glow = `rgba(${r}, ${g}, ${b}, 0.6)`;

            return {
                top: 50 + 46 * Math.sin(rad),
                left: 50 + 46 * Math.cos(rad),
                w: sizeW,
                h: sizeH,
                rotation,
                color,
                glow,
            };
        });
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-[#050510] pointer-events-none">

            {/* Stars layer */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-slate-900 via-[#050510] to-black opacity-80" />

            {/* Sun Assembly — everything inside cycles color via hue-rotate */}
            <motion.div
                initial={{ opacity: 0, top: "20%" }}
                animate={{ opacity: 1, top: "5%" }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{ y: sunY, x: sunX }}
                className="absolute left-1/2 md:left-[calc(50%+3rem)] -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] z-0 sun-color-cycle"
            >
                {/* Geometric Petals — orbit container extends beyond the sun */}
                <div className="absolute -inset-16 md:-inset-24 sun-orbit">
                    {petals.map((petal, i) => (
                        <div
                            key={i}
                            className="absolute"
                            style={{
                                top: `${petal.top}%`,
                                left: `${petal.left}%`,
                                transform: `translate(-50%, -50%) rotate(${petal.rotation}deg)`,
                            }}
                        >
                            <div
                                className="petal-diamond"
                                style={{
                                    width: petal.w,
                                    height: petal.h,
                                    backgroundColor: petal.color,
                                    filter: `drop-shadow(0 0 8px ${petal.glow})`,
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Sun Glow — drop-shadow follows the masked shape, so every
                    edge of every band gets natural glow, including horizontal edges */}
                <div
                    className="w-full h-full"
                    style={{
                        filter: 'drop-shadow(0 0 40px rgba(255,0,255,0.4)) drop-shadow(0 0 80px rgba(255,0,100,0.15))',
                    }}
                >
                    {/* Sun Body — single gradient, masked into horizontal bands */}
                    <div
                        className="w-full h-full rounded-full"
                        style={{
                            background: 'linear-gradient(to bottom, #ff3300, #ff0066, #cc00cc)',
                            maskImage: `linear-gradient(to bottom,
                                black 55%,
                                black 62%, transparent 62%,
                                transparent 68%, black 68%,
                                black 76%, transparent 76%,
                                transparent 82%, black 82%,
                                black 90%, transparent 90%,
                                transparent 95%, black 95%
                            )`,
                            WebkitMaskImage: `linear-gradient(to bottom,
                                black 55%,
                                black 62%, transparent 62%,
                                transparent 68%, black 68%,
                                black 76%, transparent 76%,
                                transparent 82%, black 82%,
                                black 90%, transparent 90%,
                                transparent 95%, black 95%
                            )`,
                        }}
                    />
                </div>
            </motion.div>

            {/* Mountains - SVG Layer */}
            <motion.div
                style={{ y: mountainsY, x: mountainsX }}
                className="absolute bottom-[20%] left-0 right-0 z-10 w-full"
            >
                <svg viewBox="0 0 1440 320" className="w-full opacity-90 block" preserveAspectRatio="none">
                    <path fill="#1a1a2e" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,213.3C840,203,960,149,1080,144C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    <path fill="#0a0a12" fillOpacity="1" d="M0,288L80,272C160,256,320,224,480,229.3C640,235,800,277,960,277.3C1120,277,1280,235,1360,213.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </motion.div>

            {/* Horizon Blocker */}
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-[#050510] z-15" />

            {/* Moving Grid Floor — also cycles color */}
            <div className="absolute bottom-[-50%] left-[-50%] right-[-50%] h-full z-20 perspective-grid-container">
                <div className="w-full h-full bg-transparent border-t border-[#FF00FF]/50 grid-floor" />
            </div>

            <style>{`
                /* ===== Rainbow Color Cycling ===== */

                /* Sun + petals cycle together */
                .sun-color-cycle {
                    animation: rainbow-hue 20s linear infinite;
                    will-change: filter;
                }

                @keyframes rainbow-hue {
                    0%   { filter: hue-rotate(0deg) brightness(0.85); }
                    100% { filter: hue-rotate(360deg) brightness(0.85); }
                }

                /* ===== Petal Orbit Rotation ===== */

                .sun-orbit {
                    animation: orbit-spin 45s linear infinite;
                    will-change: transform;
                }

                @keyframes orbit-spin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }

                /* Sharp 4-pointed diamond — colors set inline per petal */
                .petal-diamond {
                    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
                    opacity: 0.9;
                }

                /* ===== Grid Floor ===== */

                .perspective-grid-container {
                    transform: perspective(500px) rotateX(60deg);
                    transform-origin: top;
                }

                .grid-floor {
                    background-image: 
                        linear-gradient(rgba(255, 0, 255, 0.4) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 0, 255, 0.4) 1px, transparent 1px);
                    background-size: 50px 50px;
                    /* Combined animations: scrolling grid + rainbow cycling */
                    animation: grid-move 2s linear infinite, rainbow-hue 20s linear infinite;
                    box-shadow: 0 0 100px rgba(255,0,255,0.3) inset;
                    will-change: background-position, filter;
                }

                @keyframes grid-move {
                    0%   { background-position-y: 0px; }
                    100% { background-position-y: 50px; }
                }
            `}</style>
        </div>
    );
};

export default RetroBackground;
