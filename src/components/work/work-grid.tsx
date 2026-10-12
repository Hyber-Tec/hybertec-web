"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { EASE_OUT } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/work/project-card";
import { kindLabel, projects, type ProjectKind } from "@/content/projects";
import { cn } from "@/lib/utils";

type Filter = "all" | ProjectKind;

const kinds = (Object.keys(kindLabel) as ProjectKind[]).filter((kind) => projects.some((p) => p.kind === kind));
const filters: { value: Filter; label: string; count: number }[] = [
  { value: "all", label: "All work", count: projects.length },
  ...kinds.map((kind) => ({
    value: kind,
    label: `${kindLabel[kind]}s`,
    count: projects.filter((p) => p.kind === kind).length,
  })),
];

export function WorkGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? projects : projects.filter((project) => project.kind === filter);

  return (
    <div>
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {filters.map((item) => {
          const active = filter === item.value;
          return (
            <button
              key={item.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(item.value)}
              className={cn(
                "relative inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm transition-colors",
                active ? "text-background" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {active && (
                <motion.span
                  layoutId="work-filter"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              {!active && <span aria-hidden className="absolute inset-0 rounded-full border border-border" />}
              <span className="relative">{item.label}</span>
              <span className={cn("relative font-mono text-[0.6875rem]", active ? "text-background/60" : "text-muted-foreground")}>
                {item.count}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              className={cn(filter === "all" && i === 0 && "md:col-span-2")}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: i * 0.05 }}
            >
              <ProjectCard project={project} priority={i < 2} wide={filter === "all" && i === 0} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
