import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Gamepad2, Globe, Terminal, Loader2, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectCard = ({ title, desc, stack, tag, color = "#00FFFF", slug, images }) => {
    const [imgError, setImgError] = useState(false);
    const [imgLoading, setImgLoading] = useState(true);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Ref for the currently displayed image
    const imgRef = useRef(null);

    // Determines the valid image list or falls back to legacy slug
    const imageList = images && images.length > 0 ? images : [`${slug}.png`];

    // Slideshow Logic: Cycle images on hover
    useEffect(() => {
        let interval;
        if (isHovered && imageList.length > 1) {
            interval = setInterval(() => {
                setCurrentImgIndex((prev) => (prev + 1) % imageList.length);
            }, 3000); // Slower automatic switch
        } else {
            if (!isHovered) setCurrentImgIndex(0);
        }
        return () => clearInterval(interval);
    }, [isHovered, imageList.length]);

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImgIndex((prev) => (prev + 1) % imageList.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImgIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
    };

    // Failsafe for loading state
    useEffect(() => {
        const timer = setTimeout(() => {
            if (imgLoading) {
                if (imgRef.current && imgRef.current.complete) {
                    setImgLoading(false);
                }
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, [imgLoading, currentImgIndex]);

    const handleImageLoad = () => {
        setImgLoading(false);
    };

    const handleImageError = () => {
        setImgError(true);
        setImgLoading(false);
    };

    // Map icons
    const getIcon = () => {
        if (tag.includes("Game")) return <Gamepad2 size={40} color={color} />;
        if (tag.includes("Web") || tag.includes("App")) return <Globe size={40} color={color} />;
        if (tag.includes("Hardware") || tag.includes("IoT")) return <Cpu size={40} color={color} />;
        return <Terminal size={40} color={color} />;
    };

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onTap={() => setIsHovered(!isHovered)}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className={`group relative bg-black/90 border rounded-none flex flex-col transition-all duration-300 overflow-hidden h-full ${isHovered ? 'border-[currentColor]' : 'border-zinc-800'}`}
            style={{ borderColor: isHovered ? color : undefined }}
        >
            {/* Intense Glow on Hover */}
            <div
                className={`absolute inset-0 transition-opacity duration-300 pointer-events-none z-[-1] ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{ boxShadow: `0 0 40px ${color}40` }}
            />

            {/* Thumbnail Image Area */}
            <div className={`w-full aspect-video bg-zinc-900 border-b relative overflow-hidden ${isHovered ? 'border-[currentColor]' : 'border-zinc-800'}`} style={{ color: color }}>
                {!imgError ? (
                    <>
                        {imageList.length > 1 ? (
                            <>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentImgIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 w-full h-full"
                                    >
                                        <img
                                            ref={imgRef}
                                            src={`/assets/projects/${imageList[currentImgIndex]}`}
                                            alt={title}
                                            className="w-full h-full object-cover transition-all duration-300 grayscale-0 md:grayscale md:group-hover:grayscale-0"
                                            onLoad={handleImageLoad}
                                            onError={handleImageError}
                                            loading="eager"
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Manual Controls */}
                                <button
                                    onClick={prevImage}
                                    className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1 rounded-full transition-opacity z-30 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1 rounded-full transition-opacity z-30 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </>
                        ) : (
                            <img
                                ref={imgRef}
                                src={`/assets/projects/${imageList[0]}`}
                                alt={title}
                                className="w-full h-full object-cover transition-all duration-300 absolute inset-0 grayscale-0 md:grayscale md:group-hover:grayscale-0"
                                onLoad={handleImageLoad}
                                onError={handleImageError}
                                loading="eager"
                            />
                        )}

                        {/* Persistent Loader */}
                        {imgLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-zinc-600 z-10">
                                <Loader2 className="animate-spin" />
                            </div>
                        )}
                    </>
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950">
                        <div className="w-full h-full opacity-10 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover mix-blend-overlay"></div>
                        <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest z-10">NO SIGNAL</span>
                        <div className="z-10 mt-2">{getIcon()}</div>
                    </div>
                )}

                {/* Tag Overlay */}
                <div className="absolute top-2 right-2 z-20">
                    <span
                        className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider border text-black shadow-lg"
                        style={{ backgroundColor: color, borderColor: color }}
                    >
                        {tag}
                    </span>
                </div>
                {/* Image indicator dots if multiple */}
                {imageList.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                        {imageList.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-1 h-1 rounded-full transition-colors ${idx === currentImgIndex ? 'bg-white' : 'bg-white/30'}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3
                    className="text-2xl font-black mb-3 text-white uppercase tracking-tighter truncate"
                    style={{ textShadow: `2px 2px 0px ${color}40` }}
                    title={title}
                >
                    {title}
                </h3>

                <p className={`text-slate-400 mb-6 font-mono text-xs leading-relaxed border-l-2 pl-4 grow transition-colors line-clamp-3 ${isHovered ? 'border-white' : 'border-zinc-800'}`}>
                    {desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {stack.split(', ').slice(0, 4).map((tech, idx) => (
                        <span
                            key={idx}
                            className={`text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-zinc-900 px-2 py-1 border transition-colors ${isHovered ? 'border-slate-500' : 'border-zinc-800'}`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
