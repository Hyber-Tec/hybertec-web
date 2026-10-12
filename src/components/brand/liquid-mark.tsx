"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";

import { cn } from "@/lib/utils";

import { ChromeMark } from "./chrome-mark";

const LiquidCanvas = dynamic(() => import("./liquid-canvas"), { ssr: false });

/**
 * The HT mark rendered as live liquid chrome (Paper LiquidMetal, WebGL).
 * A static chrome SVG paints immediately and is swapped for the shader once
 * its code and texture have loaded. Paper pauses rendering when offscreen.
 */
export function LiquidMark({ className, speed = 0.55 }: { className?: string; speed?: number }) {
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  return (
    <div className={cn("relative aspect-[1498/2295]", className)}>
      <ChromeMark
        className={cn(
          "absolute inset-0 h-full w-full p-[3%] opacity-90 transition-opacity duration-1000",
          ready && "opacity-0",
        )}
      />
      <LiquidCanvas speed={speed} onReady={handleReady} />
    </div>
  );
}
