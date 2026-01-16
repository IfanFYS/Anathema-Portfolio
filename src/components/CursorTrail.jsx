import React, { useEffect, useRef } from "react";

const CursorTrail = () => {
    const canvasRef = useRef(null);
    const points = useRef([]);
    const mouse = useRef({ x: 0, y: 0 });
    const hue = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
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

        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Add new point every frame to follow cursor closely (No Lag)
            // Adding every frame ensures the head is ALWAYS at the cursor position.
            points.current.push({ x: mouse.current.x, y: mouse.current.y });

            // Limit trail length - keep it relatively short for snappiness
            if (points.current.length > 20) {
                points.current.shift();
            }

            // Draw the line with Rainbow Wave & Tapering Thickness
            ctx.lineCap = "round";
            ctx.lineJoin = "round";

            if (points.current.length > 1) {
                for (let i = 0; i < points.current.length - 1; i++) {
                    const point = points.current[i];
                    const nextPoint = points.current[i + 1];

                    // Rainbow Wave: Offset hue by index
                    // tail (low index) to head (high index)
                    // The wave moves as hue.current changes
                    const segmentHue = (hue.current + (i * 10)) % 360;

                    // Tapering: Head (end of array) is thickest
                    // i=0 is tail, i=length is head
                    const ratio = i / points.current.length;
                    const lineWidth = ratio * 8; // Max width 8px
                    const opacity = ratio; // Smooth fade from 0 to 1

                    ctx.beginPath();
                    ctx.moveTo(point.x, point.y);
                    ctx.lineTo(nextPoint.x, nextPoint.y);

                    ctx.strokeStyle = `hsla(${segmentHue}, 100%, 50%, ${opacity})`;
                    ctx.lineWidth = lineWidth;

                    // Add glow to the head segments primarily
                    ctx.shadowBlur = ratio * 15;
                    ctx.shadowColor = `hsla(${segmentHue}, 100%, 50%, ${opacity})`;

                    ctx.stroke();
                }
            }

            hue.current = (hue.current + 5) % 360; // Cycle base hue faster

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="hidden md:block fixed inset-0 z-50 pointer-events-none" />;
};

export default CursorTrail;
