import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  aspect?: string;
  grayscale?: boolean;
  className?: string;
  priority?: boolean;
  /** "square" | "circle" | undefined (default rectangle from aspect) */
  shape?: "square" | "circle";
  /** If true, image is fit inside (contain) instead of covering — for cutouts. */
  contain?: boolean;
  /** Custom object-position, e.g. "center top". */
  focus?: string;
};

export function Plate({
  src,
  alt,
  aspect = "4 / 5",
  grayscale = false,
  className,
  priority = false,
  shape,
  contain = false,
  focus = "center top",
}: Props) {
  const resolvedAspect = shape === "square" || shape === "circle" ? "1 / 1" : aspect;
  const style: CSSProperties = { aspectRatio: resolvedAspect };
  return (
    <figure
      className={cn(
        "relative overflow-hidden border border-border bg-surface",
        shape === "circle" && "rounded-full",
        className
      )}
      style={style}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        style={{ objectPosition: focus }}
        className={cn(
          "h-full w-full transition-transform duration-[900ms] ease-out will-change-transform hover:scale-[1.02]",
          contain ? "object-contain" : "object-cover",
          grayscale && "grayscale contrast-125"
        )}
      />
    </figure>
  );
}
