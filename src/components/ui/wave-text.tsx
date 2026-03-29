"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text?: string;
  className?: string;
}

function Text_03({
  text = "Hover me",
  className = "",
}: AnimatedTextProps) {
  return (
    <motion.span
      className={cn(
        "inline text-left leading-tight transition-all",
        className
      )}
      whileHover="hover"
      initial="initial"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block whitespace-pre"
          variants={{
            initial: {
              y: 0,
              scale: 1,
            },
            hover: {
              y: -4,
              scale: 1.2,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: index * 0.03,
              },
            },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export { Text_03 };
