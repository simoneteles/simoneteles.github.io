import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

interface ParallaxTextProps {
  children: string;
  baseVelocity?: number;
}

export function ParallaxText({ children, baseVelocity = 1 }: ParallaxTextProps) {
  const baseX = useSpring(0, { damping: 50, stiffness: 400 });
  const { scrollY } = useScroll();
  const scrollVelocity = useTransform(scrollY, [0, 1000], [0, baseVelocity * 100]);
  const x = useTransform(scrollVelocity, (v) => `${v}%`);

  return (
    <div className="overflow-hidden whitespace-nowrap flex">
      <motion.div
        className="flex gap-8 text-6xl md:text-8xl font-bold opacity-5"
        style={{ x }}
      >
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}
