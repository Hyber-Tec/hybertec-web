"use client";

import { getShaderColorFromString, LiquidMetalShapes, liquidMetalFragmentShader, ShaderFitOptions } from "@paper-design/shaders";
import { ShaderMount } from "@paper-design/shaders-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

import { useTheme } from "@/hooks/use-theme";

/**
 * Pre-processed edge texture of the official mark (R = edge gradient, G = alpha),
 * generated once with Paper's `toProcessedLiquidMetal` so the browser does no
 * image processing at runtime.
 */
const TEXTURE = "/brand/hybertec-mark-liquid.png";

const baseUniforms = {
  u_colorBack: getShaderColorFromString("#00000000"),
  u_image: TEXTURE,
  u_contour: 0.45,
  u_distortion: 0.08,
  u_softness: 0.12,
  u_repetition: 2.2,
  u_shiftRed: 0,
  u_shiftBlue: 0,
  u_angle: 70,
  u_isImage: true,
  u_shape: LiquidMetalShapes.none,
  u_fit: ShaderFitOptions.contain,
  u_scale: 1,
  u_rotation: 0,
  u_offsetX: 0,
  u_offsetY: 0,
  u_originX: 0.5,
  u_originY: 0.5,
  u_worldWidth: 0,
  u_worldHeight: 0,
};

type LiquidCanvasProps = { speed: number; onReady: () => void };

/** WebGL layer of <LiquidMark>, split out so the shader code loads lazily. */
export default function LiquidCanvas({ speed, onReady }: LiquidCanvasProps) {
  const reduce = useReducedMotion();
  const theme = useTheme();
  const [ready, setReady] = useState(false);

  // Decode the texture first so the shader paints its first frame immediately.
  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.src = TEXTURE;
    img
      .decode()
      .then(() => {
        if (cancelled) return;
        setReady(true);
        onReady();
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [onReady]);

  // Bright chrome on the dark theme, dark gunmetal on the light theme.
  const uniforms = useMemo(
    () => ({ ...baseUniforms, u_colorTint: getShaderColorFromString(theme === "dark" ? "#fafafa" : "#3f3f3f") }),
    [theme],
  );

  if (!ready) return null;

  return (
    <ShaderMount
      aria-hidden
      className="absolute inset-0 animate-in fade-in-0 duration-1000 [filter:grayscale(1)_contrast(1.05)]"
      fragmentShader={liquidMetalFragmentShader}
      mipmaps={["u_image"]}
      speed={reduce ? 0 : speed}
      frame={4000}
      minPixelRatio={1}
      maxPixelCount={1800 * 1800}
      uniforms={uniforms}
    />
  );
}
