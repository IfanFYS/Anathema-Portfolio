import React, { useEffect, useRef } from "react";

const CursorTrail = () => {
    const canvasRef = useRef(null);
    const points = useRef([]);
    const mouse = useRef({ x: 0, y: 0 });
    const hue = useRef(0);
    const lastAddTime = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d", { alpha: true });
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        const animate = (timestamp) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Only add a new point every ~32ms (roughly 30fps point sampling)
            if (timestamp - lastAddTime.current > 32) {
                points.current.push({ x: mouse.current.x, y: mouse.current.y });
                lastAddTime.current = timestamp;
            }

            // Limit trail length
            if (points.current.length > 15) {
                points.current.shift();
            }

            // Draw the trail
            if (points.current.length > 1) {
                ctx.lineCap = "round";
                ctx.lineJoin = "round";

                for (let i = 0; i < points.current.length - 1; i++) {
                    const point = points.current[i];
                    const nextPoint = points.current[i + 1];

                    const segmentHue = (hue.current + (i * 10)) % 360;
                    const ratio = i / points.current.length;
                    const lineWidth = ratio * 6;
                    const opacity = ratio;

                    ctx.beginPath();
                    ctx.moveTo(point.x, point.y);
                    ctx.lineTo(nextPoint.x, nextPoint.y);

                    ctx.strokeStyle = `hsla(${segmentHue}, 100%, 50%, ${opacity})`;
                    ctx.lineWidth = lineWidth;

                    // Only apply glow to the last few segments (cheaper than all)
                    if (i > points.current.length - 4) {
                        ctx.shadowBlur = 10;
                        ctx.shadowColor = `hsla(${segmentHue}, 100%, 50%, 0.5)`;
                    } else {
                        ctx.shadowBlur = 0;
                    }

                    ctx.stroke();
                }
                // Reset shadow after drawing
                ctx.shadowBlur = 0;
            }

            hue.current = (hue.current + 4) % 360;

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="hidden md:block fixed inset-0 z-50 pointer-events-none" />;
};

export default CursorTrail;
