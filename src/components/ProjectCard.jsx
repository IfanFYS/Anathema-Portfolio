import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Gamepad2, Globe, Terminal, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectCard = ({ title, desc, stack, tag, color = "#00FFFF", slug, images }) => {
    const [failedSrcs, setFailedSrcs] = useState(() => new Set());
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    const getImageSrc = (image) => image.startsWith("/") ? image : `/assets/projects/${image}`;
    const imageSources = useMemo(() => {
        const imageList = images && images.length > 0 ? images : [`${slug}.png`];
        return imageList.map(getImageSrc);
    }, [images, slug]);
    const availableImages = imageSources.filter((src) => !failedSrcs.has(src));
    const hasImages = availableImages.length > 0;
    const activeImageIndex = hasImages ? currentImgIndex % availableImages.length : 0;
    const activeImageSrc = availableImages[activeImageIndex];
    const hasMultipleImages = availableImages.length > 1;
    const slideVariants = {
        enter: (direction) => ({ x: direction > 0 ? "100%" : "-100%" }),
        center: { x: 0 },
        exit: (direction) => ({ x: direction > 0 ? "-100%" : "100%" })
    };

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        setFailedSrcs(new Set());
        setCurrentImgIndex(0);
    }, [imageSources]);

    useEffect(() => {
        imageSources.forEach((src) => {
            const image = new Image();
            image.src = src;
        });
    }, [imageSources]);

    // Slideshow Logic: Cycle images on hover
    useEffect(() => {
        let interval;
        if (isHovered && hasMultipleImages) {
            interval = setInterval(() => {
                setSlideDirection(1);
                setCurrentImgIndex((prev) => (prev + 1) % availableImages.length);
            }, 3000); // Slower automatic switch
        }
        return () => clearInterval(interval);
    }, [activeImageIndex, availableImages.length, hasMultipleImages, isHovered]);

    const nextImage = (e) => {
        e.stopPropagation();
        setSlideDirection(1);
        setCurrentImgIndex((prev) => (prev + 1) % availableImages.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setSlideDirection(-1);
        setCurrentImgIndex((prev) => (prev - 1 + availableImages.length) % availableImages.length);
    };

    const handleDragEnd = (_, info) => {
        if (!hasMultipleImages) return;

        if (info.offset.x < -50 || info.velocity.x < -500) {
            setSlideDirection(1);
            setCurrentImgIndex((prev) => (prev + 1) % availableImages.length);
        } else if (info.offset.x > 50 || info.velocity.x > 500) {
            setSlideDirection(-1);
            setCurrentImgIndex((prev) => (prev - 1 + availableImages.length) % availableImages.length);
        }
    };

    const handleImageError = (src) => {
        setFailedSrcs((prev) => {
            const next = new Set(prev);
            next.add(src);
            return next;
        });
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
            className={`group relative bg-black/90 border rounded-lg flex flex-col transition-all duration-300 overflow-hidden h-full backdrop-blur-sm ${isHovered ? 'border-[currentColor]' : 'border-white/10'}`}
            style={{ borderColor: isHovered ? color : undefined }}
        >
            {/* Intense Glow on Hover */}
            <div
                className={`absolute inset-0 transition-opacity duration-300 pointer-events-none z-[-1] ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{ boxShadow: `0 0 40px ${color}40` }}
            />

            {/* Thumbnail Image Area */}
            <div className={`w-full aspect-video bg-zinc-900 border-b relative overflow-hidden ${isHovered ? 'border-[currentColor]' : 'border-white/10'}`} style={{ color: color }}>
                {hasImages ? (
                    <>
                        {hasMultipleImages ? (
                            <>
                                <AnimatePresence initial={false} custom={slideDirection}>
                                    <motion.div
                                        key={activeImageSrc}
                                        custom={slideDirection}
                                        variants={slideVariants}
                                        initial={hasMounted ? "enter" : false}
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={0.12}
                                        onDragEnd={handleDragEnd}
                                        className="absolute inset-0 w-full h-full"
                                    >
                                        <img
                                            src={activeImageSrc}
                                            alt={title}
                                            className="w-full h-full object-cover transition-all duration-300"
                                            onError={() => handleImageError(activeImageSrc)}
                                            loading="eager"
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Manual Controls */}
                                <button
                                    onClick={prevImage}
                                    className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1 rounded transition-opacity z-30 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                                    aria-label="Previous project image"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1 rounded transition-opacity z-30 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                                    aria-label="Next project image"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </>
                        ) : (
                            <img
                                src={activeImageSrc}
                                alt={title}
                                className="w-full h-full object-cover transition-all duration-300 absolute inset-0"
                                onError={() => handleImageError(activeImageSrc)}
                                loading="eager"
                            />
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
                {hasMultipleImages && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                        {availableImages.map((src, idx) => (
                            <div
                                key={src}
                                className={`w-1 h-1 rounded-full transition-colors ${idx === activeImageIndex ? 'bg-white' : 'bg-white/30'}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col grow">
                <h3
                    className="text-xl md:text-2xl font-black mb-3 uppercase tracking-tight transition-colors duration-300"
                    style={{
                        color: isHovered ? color : 'white',
                        textShadow: `2px 2px 0px ${color}40`
                    }}
                    title={title}
                >
                    {title}
                </h3>

                <p className={`text-slate-400 mb-6 font-mono text-xs leading-relaxed border-l-2 pl-4 grow transition-colors line-clamp-3 ${isHovered ? 'border-white' : 'border-white/10'}`}>
                    {desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {stack.split(', ').slice(0, 4).map((tech, idx) => (
                        <span
                            key={idx}
                            className={`text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-zinc-900 px-2 py-1 border transition-colors ${isHovered ? 'border-slate-500' : 'border-white/10'}`}
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
