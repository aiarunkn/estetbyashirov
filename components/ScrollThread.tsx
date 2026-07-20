"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/**
 * Builds a meandering vertical thread hugging the right margin, with a few
 * loop "twirls" along the way. Coordinates are real pixels so twirls stay
 * circular regardless of viewport size.
 */
function buildThreadPath(width: number, height: number): string {
  if (width <= 0 || height <= 0) return "";

  const gutter = Math.min(42, Math.max(18, width * 0.03));
  const edgeX = width - gutter;
  const amplitude = Math.min(14, gutter * 0.4);
  const twirlRadius = Math.min(20, Math.max(13, gutter * 0.32));

  const segmentHeight = Math.max(360, Math.min(560, height / 8));
  const segments = Math.max(3, Math.ceil(height / segmentHeight));
  const twirlEvery = Math.max(2, Math.round(segments / 4));

  let x = edgeX;
  let y = 0;
  let d = `M ${x.toFixed(1)} ${y.toFixed(1)}`;

  for (let i = 1; i <= segments; i++) {
    const targetY = Math.min(height, (height / segments) * i);
    const dir = i % 2 === 0 ? 1 : -1;
    const targetX = edgeX + dir * amplitude * (0.55 + (i % 3) * 0.22);
    const midY = y + (targetY - y) * 0.5;

    d += ` C ${x.toFixed(1)} ${midY.toFixed(1)}, ${targetX.toFixed(1)} ${midY.toFixed(1)}, ${targetX.toFixed(1)} ${targetY.toFixed(1)}`;

    if (i % twirlEvery === 0 && i !== segments) {
      const r = twirlRadius;
      d += ` a ${r.toFixed(1)} ${r.toFixed(1)} 0 1 1 ${(r * 0.02).toFixed(2)} ${(r * 0.02).toFixed(2)}`;
    }

    x = targetX;
    y = targetY;
  }

  return d;
}

export default function ScrollThread() {
  const reducedMotion = useReducedMotion();
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const measure = () => {
      setSize({
        width: window.innerWidth,
        height: document.documentElement.scrollHeight,
      });
    };
    measure();

    const ro = new ResizeObserver(() => measure());
    ro.observe(document.body);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const path = useMemo(() => buildThreadPath(size.width, size.height), [size.width, size.height]);

  const { scrollYProgress } = useScroll();
  const drawn = useSpring(scrollYProgress, { stiffness: 55, damping: 22, mass: 0.4 });

  if (!path || size.width < 768) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-30"
      style={{ height: size.height }}
    >
      <svg
        width={size.width}
        height={size.height}
        viewBox={`0 0 ${size.width} ${size.height}`}
        className="absolute inset-0"
        fill="none"
      >
        <path
          d={path}
          stroke="rgba(26,21,18,0.16)"
          strokeWidth={6.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d={path}
          stroke="#FFFFFF"
          strokeWidth={3.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength: reducedMotion ? 1 : drawn }}
        />
      </svg>
    </div>
  );
}
