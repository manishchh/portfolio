"use client";

import * as React from "react";

type GlowColor = "blue" | "purple" | "green" | "red" | "orange";
type GlowSize = "sm" | "md" | "lg";

interface GlowCardProps {
  children?: React.ReactNode;
  className?: string;
  glowColor?: GlowColor;
  size?: GlowSize;
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const glowColorMap: Record<GlowColor, { base: number; spread: number }> = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
};

const sizeMap: Record<GlowSize, string> = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
};

type GlowStyle = React.CSSProperties & {
  "--base": number;
  "--spread": number;
  "--radius": string;
  "--border": string;
  "--backdrop": string;
  "--backup-border": string;
  "--size": string;
  "--outer": string;
  "--border-size": string;
  "--spotlight-size": string;
  "--hue": string;
  "--border-spot-opacity": string;
  "--border-light-opacity": string;
  "--bg-spot-opacity": string;
};

function GlowCard({
  children,
  className = "",
  glowColor = "blue",
  size = "md",
  width,
  height,
  customSize = false,
}: GlowCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const syncPointer = (event: PointerEvent) => {
      const { clientX: x, clientY: y } = event;

      if (cardRef.current) {
        cardRef.current.style.setProperty("--x", x.toFixed(2));
        cardRef.current.style.setProperty(
          "--xp",
          (x / window.innerWidth).toFixed(3)
        );
        cardRef.current.style.setProperty("--y", y.toFixed(2));
        cardRef.current.style.setProperty(
          "--yp",
          (y / window.innerHeight).toFixed(3)
        );
      }
    };

    document.addEventListener("pointermove", syncPointer);

    return () => {
      document.removeEventListener("pointermove", syncPointer);
    };
  }, []);

  const { base, spread } = glowColorMap[glowColor];

  const getSizeClasses = () => {
    if (customSize) {
      return "";
    }

    return sizeMap[size];
  };

  const getInlineStyles = (): GlowStyle => {
    const baseStyles: GlowStyle = {
      "--base": base,
      "--spread": spread,
      "--radius": "28",
      "--border": "2",
      "--backdrop": "hsl(0 0% 100% / 0.025)",
      "--backup-border": "hsl(0 0% 100% / 0.10)",
      "--size": "360",
      "--outer": "1",
      "--border-size": "calc(var(--border, 2) * 1px)",
      "--spotlight-size": "calc(var(--size, 150) * 1px)",
      "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
      "--border-spot-opacity": "1",
      "--border-light-opacity": "0.85",
      "--bg-spot-opacity": "0.04",
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) 100% 70% / var(--bg-spot-opacity, 0.04)),
        transparent
      )`,
      backgroundColor: "var(--backdrop, transparent)",
      backgroundSize:
        "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
      backgroundPosition: "50% 50%",
      backgroundAttachment: "fixed",
      border: "var(--border-size) solid var(--backup-border)",
      position: "relative",
      touchAction: "none",
    };

    if (width !== undefined) {
      baseStyles.width = typeof width === "number" ? `${width}px` : width;
    }

    if (height !== undefined) {
      baseStyles.height = typeof height === "number" ? `${height}px` : height;
    }

    return baseStyles;
  };

  const beforeAfterStyles = `
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: fixed;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }

    [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.9) calc(var(--spotlight-size) * 0.9) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) 100% 56% / var(--border-spot-opacity, 1)),
        transparent 100%
      );
      filter: brightness(2.1);
    }

    [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.6) calc(var(--spotlight-size) * 0.6) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(0 100% 100% / var(--border-light-opacity, 0.85)),
        transparent 100%
      );
    }

    [data-glow] [data-glow] {
      position: absolute;
      inset: 0;
      will-change: filter;
      opacity: var(--outer, 1);
      border-radius: calc(var(--radius) * 1px);
      border-width: calc(var(--border-size) * 22);
      filter: blur(calc(var(--border-size) * 14));
      background: none;
      pointer-events: none;
      border: none;
    }

    [data-glow] > [data-glow]::before {
      inset: -12px;
      border-width: 12px;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        style={getInlineStyles()}
        className={`
          ${getSizeClasses()}
          ${!customSize ? "aspect-[3/4]" : ""}
          relative
          rounded-[28px]
          p-4
          shadow-[0_1rem_2rem_-1rem_black]
          backdrop-blur-[5px]
          ${className}
        `}
      >
        <div data-glow></div>
        {children}
      </div>
    </>
  );
}

export { GlowCard };
