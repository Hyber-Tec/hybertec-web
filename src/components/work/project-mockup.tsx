import { BrowserFrame } from "@/components/mockups/browser-frame";
import { PhoneFrame } from "@/components/mockups/phone-frame";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

type ProjectMockupProps = {
  project: Project;
  className?: string;
  priority?: boolean;
  /** Which corner of the browser the phone overlaps. */
  phoneSide?: "left" | "right";
};

function hostname(url?: string) {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/**
 * Device composition for a project: a browser window with the desktop
 * screenshot and an overlapping phone for the mobile view. Mobile apps
 * (no desktop shot) render their screens side by side in phones instead.
 */
export function ProjectMockup({ project, className, priority, phoneSide = "right" }: ProjectMockupProps) {
  const { desktop, mobile, screens } = project.media;

  if (!desktop) {
    const phones = screens?.length ? screens : mobile ? [mobile] : [];
    return (
      <div className={cn("flex items-end justify-center gap-[4%]", className)}>
        {phones.slice(0, 3).map((src, i) => (
          <PhoneFrame
            key={src}
            src={src}
            alt={`${project.name} app screen ${i + 1}`}
            priority={priority && i === 0}
            className={cn("w-[30%] max-w-[260px] drop-shadow-2xl", i === 1 && "-translate-y-[6%]")}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={cn("relative", mobile && (phoneSide === "right" ? "pr-[9%] pb-[7%]" : "pb-[7%] pl-[9%]"), className)}>
      <BrowserFrame
        src={desktop}
        alt={`${project.name} — desktop screenshot`}
        url={hostname(project.url)}
        priority={priority}
        className="drop-shadow-2xl"
      />
      {mobile && (
        <PhoneFrame
          src={mobile}
          alt={`${project.name} — mobile screenshot`}
          className={cn(
            "absolute bottom-0 w-[24%] drop-shadow-[0_24px_48px_rgb(0_0_0/0.5)]",
            phoneSide === "right" ? "right-0" : "left-0",
          )}
        />
      )}
    </div>
  );
}
