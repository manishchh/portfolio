"use client";

import * as React from "react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonBorderProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
}

export function ButtonBorder({
  children,
  className,
  ...props
}: ButtonBorderProps) {
  return (
    <Button
      variant="outline"
      className={cn(
        "relative rounded-xl border-white/16 bg-transparent text-zinc-200 hover:bg-white/6 hover:text-white",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "-inset-px pointer-events-none absolute rounded-[inherit] border-2 border-transparent border-inset [mask-clip:padding-box,border-box]",
          "[mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
        )}
      >
        <motion.div
          className="absolute aspect-square bg-gradient-to-r from-transparent via-primary to-primary"
          animate={{ offsetDistance: ["0%", "100%"] }}
          style={{
            width: 20,
            offsetPath: "rect(0 auto auto 0 round 12px)",
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "linear",
          }}
        />
      </div>
      {children}
    </Button>
  );
}
