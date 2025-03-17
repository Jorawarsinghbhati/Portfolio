"use client";
import React from "react";
import { motion } from "motion/react";

type SpotlightProps = {
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: SpotlightProps = {}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pointer-events-none absolute inset-0 h-full w-full z-[-1]"
    >
      {/* Left Spotlight */}
      <motion.div
        animate={{ x: [0, xOffset, 0] }}
        transition={{ duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div className="absolute top-0 left-0 bg-gradient-radial w-[560px] h-[1380px] -rotate-45 translate-y-[-350px]" />
        <div className="absolute top-0 left-0 bg-gradient-radial-small w-[240px] h-[1380px] -rotate-45 translate-x-[5%] translate-y-[-50%]" />
        <div className="absolute top-0 left-0 bg-gradient-radial-small w-[240px] h-[1380px] -rotate-45 -translate-x-[180%] -translate-y-[70%]" />
      </motion.div>

      {/* Right Spotlight */}
      <motion.div
        animate={{ x: [0, -xOffset, 0] }}
        transition={{ duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div className="absolute top-0 right-0 bg-gradient-radial w-[560px] h-[1380px] rotate-45 translate-y-[-350px]" />
        <div className="absolute top-0 right-0 bg-gradient-radial-small w-[240px] h-[1380px] rotate-45 -translate-x-[5%] -translate-y-[50%]" />
        <div className="absolute top-0 right-0 bg-gradient-radial-small w-[240px] h-[1380px] rotate-45 translate-x-[180%] -translate-y-[70%]" />
      </motion.div>
    </motion.div>
  );
};
