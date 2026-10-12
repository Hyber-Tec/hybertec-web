import { FaAndroid, FaApple } from "react-icons/fa";
import { LuGlobe, LuMonitor } from "react-icons/lu";

import { Badge } from "@/components/ui/badge";
import { platformLabel, type Platform } from "@/content/projects";
import { cn } from "@/lib/utils";

const icons = { web: LuGlobe, ios: FaApple, android: FaAndroid, desktop: LuMonitor } as const;

export function PlatformBadges({ platforms, className }: { platforms: Platform[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {platforms.map((platform) => {
        const Icon = icons[platform];
        return (
          <li key={platform}>
            <Badge variant="chip" className="px-2.5">
              <Icon aria-hidden />
              {platformLabel[platform]}
            </Badge>
          </li>
        );
      })}
    </ul>
  );
}
