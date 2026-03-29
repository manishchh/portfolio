"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

import { cn } from "@/lib/utils";

export interface MagneticTabItem {
  value: string;
  label: string;
  href?: string;
}

interface MagneticTabsProps {
  items: MagneticTabItem[];
  defaultValue?: string;
  className?: string;
  indicatorPadding?: number;
}

export default function MagneticTabs({
  items,
  defaultValue,
  className,
  indicatorPadding = 8,
}: MagneticTabsProps) {
  const initialValue = defaultValue ?? items[0]?.value ?? "";
  const [active, setActive] = React.useState(initialValue);
  const [hovered, setHovered] = React.useState<string | null>(null);

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const tabRefs = React.useRef<Array<HTMLAnchorElement | null>>([]);

  const indicatorX = useMotionValue(0);
  const indicatorWidth = useMotionValue(0);
  const indicatorTop = useMotionValue(0);
  const indicatorHeight = useMotionValue(0);

  const springConfig = { stiffness: 340, damping: 28 };
  const springX = useSpring(indicatorX, springConfig);
  const springW = useSpring(indicatorWidth, springConfig);
  const springTop = useSpring(indicatorTop, springConfig);
  const springH = useSpring(indicatorHeight, springConfig);

  const updateIndicator = React.useCallback(
    (value: string) => {
      const idx = items.findIndex((item) => item.value === value);
      const button = tabRefs.current[idx];
      const container = containerRef.current;

      if (!button || !container) {
        return;
      }

      const cRect = container.getBoundingClientRect();
      const bRect = button.getBoundingClientRect();
      indicatorX.set(bRect.left - cRect.left - indicatorPadding);
      indicatorWidth.set(bRect.width + indicatorPadding * 2);
      indicatorTop.set(bRect.top - cRect.top - indicatorPadding);
      indicatorHeight.set(bRect.height + indicatorPadding * 2);
    },
    [indicatorHeight, indicatorPadding, indicatorWidth, indicatorX, indicatorTop, items]
  );

  React.useEffect(() => {
    updateIndicator(hovered ?? active);

    const handleResize = () => updateIndicator(hovered ?? active);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [active, hovered, updateIndicator]);

  return (
    <div className={cn("flex justify-center", className)}>
      <div
        ref={containerRef}
        className="relative inline-flex max-w-full items-center justify-start gap-1 overflow-x-auto rounded-full border border-white/15 bg-[#0f0f0f]/90 p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center sm:gap-2 sm:p-2"
      >
        <motion.div
          style={{
            left: springX,
            width: springW,
            top: springTop,
            height: springH,
          }}
          className="pointer-events-none absolute rounded-full bg-white/[0.08]"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-white/[0.04] blur-md"
            initial={false}
            animate={{ opacity: 1 }}
          />
        </motion.div>

        {items.map((item, index) => (
          <motion.a
            key={item.value}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            href={item.href ?? `#${item.value}`}
            onClick={() => setActive(item.value)}
            onMouseEnter={() => setHovered(item.value)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "relative z-10 shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors sm:px-5 sm:py-3 sm:text-sm sm:tracking-wide",
              active === item.value ? "text-white" : "text-zinc-400 hover:text-white"
            )}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
          >
            {item.label}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
