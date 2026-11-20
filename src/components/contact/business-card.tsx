"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTime, useTransform } from "motion/react";
import Image from "next/image";
import { useState, type PointerEvent } from "react";

import { cn } from "@/lib/utils";

type BusinessCardProps = {
  /** Contact side (transparent artwork, printed on white). */
  front: string;
  /** Logo side. */
  back: string;
  name: string;
  /** Offsets the idle sway so two cards don't move in step. */
  phase?: number;
  className?: string;
};

/**
 * A business card in 3D. It sways gently, tilts toward the pointer with the
 * light following it, and flips over on click, tap, Enter or Space to show the
 * logo side. With reduced motion it stays still and flips instantly. Needs a
 * parent with `perspective`.
 */
export function BusinessCard({ front, back, name, phase = 0, className }: BusinessCardProps) {
  const reduce = useReducedMotion();
  const [flipped, setFlipped] = useState(false);

  const tiltX = useSpring(0, { stiffness: 170, damping: 18 });
  const tiltY = useSpring(0, { stiffness: 170, damping: 18 });
  const flip = useSpring(0, { stiffness: 70, damping: 14 });
  // Idle sway fades out while the pointer is on the card.
  const sway = useSpring(1, { stiffness: 60, damping: 20 });
  const time = useTime();
  const rotateY = useTransform(() => flip.get() + tiltY.get() + (reduce ? 0 : Math.sin(time.get() / 1500 + phase) * 8 * sway.get()));
  const rotateX = useTransform(() => tiltX.get() + (reduce ? 0 : Math.cos(time.get() / 1900 + phase) * 3 * sway.get()));

  const lightX = useMotionValue(28);
  const lightY = useMotionValue(18);
  // Multiply shading: paper darkens away from the light, the ink stays black.
  const light = useMotionTemplate`radial-gradient(140% 140% at ${lightX}% ${lightY}%, #fff 20%, rgb(214 214 214) 90%)`;

  function handleMove(event: PointerEvent<HTMLButtonElement>) {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    // Facing the logo side, left and right are mirrored.
    tiltY.set((x - 0.5) * (flipped ? -18 : 18));
    tiltX.set((0.5 - y) * 12);
    lightX.set(x * 100);
    lightY.set(y * 100);
    sway.set(0);
  }

  function handleLeave() {
    tiltX.set(0);
    tiltY.set(0);
    sway.set(1);
  }

  function toggle() {
    const next = !flipped;
    setFlipped(next);
    if (reduce) flip.jump(next ? 180 : 0);
    else flip.set(next ? 180 : 0);
  }

  return (
    <motion.button
      type="button"
      onClick={toggle}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      aria-pressed={flipped}
      aria-label={`${name}'s business card. Flip to the ${flipped ? "contact" : "logo"} side.`}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn(
        "relative block aspect-[7/4] w-full cursor-pointer rounded-[4%/7%] outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        className,
      )}
    >
      <Face image={front} light={light} />
      <Face image={back} light={light} back />
    </motion.button>
  );
}

function Face({ image, light, back = false }: { image: string; light: ReturnType<typeof useMotionTemplate>; back?: boolean }) {
  return (
    <span
      className={cn(
        "absolute inset-0 overflow-hidden rounded-[inherit] bg-white [backface-visibility:hidden] [-webkit-backface-visibility:hidden]",
        "shadow-[0_1px_0_rgb(0_0_0/0.04),0_30px_60px_-24px_rgb(0_0_0/0.35),0_10px_24px_-12px_rgb(0_0_0/0.2)]",
        back && "[transform:rotateY(180deg)]",
      )}
    >
      <Image src={image} alt="" fill sizes="(min-width: 1024px) 34rem, (min-width: 768px) 45vw, 90vw" className="object-cover" />
      <motion.span aria-hidden style={{ background: light }} className="absolute inset-0 mix-blend-multiply" />
    </span>
  );
}
