import React from "react";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-900">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-600/30 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[30%] left-[30%] h-[400px] w-[400px] rounded-full bg-pink-600/20 blur-[120px]"
      />
    </div>
  );
};

export default Background;
