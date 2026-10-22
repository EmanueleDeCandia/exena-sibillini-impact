import { cn } from "../utils/cn";
import type { ReactNode, ButtonHTMLAttributes } from "react";

export function Stripes({
  className,
  color = "currentColor",
  size = "md",
}: {
  className?: string;
  color?: string;
  size?: "sm" | "md" | "lg";
}) {
  const h = size === "sm" ? "h-[3px]" : size === "lg" ? "h-[6px]" : "h-[4px]";
  const gap = size === "sm" ? "gap-[3px]" : size === "lg" ? "gap-[6px]" : "gap-[4px]";
  const w = ["w-[60%]", "w-[80%]", "w-full"];
  return (
    <div className={cn("flex flex-col", gap, className)} aria-hidden>
      {w.map((ww, i) => (
        <span key={i} className={cn("block", h, ww)} style={{ background: color }} />
      ))}
    </div>
  );
}

export function Logo({ inverse = false, compact = false }: { inverse?: boolean; compact?: boolean }) {
  const c = inverse ? "#fff" : "#000";
  return (
    <a href="#top" className="flex items-center gap-3 group" aria-label="Sibillini Impact">
      <svg width={compact ? 28 : 36} height={compact ? 28 : 36} viewBox="0 0 36 36" fill="none" aria-hidden>
        <path d="M4 28 L12 8 L20 28 Z" fill={c} />
        <path d="M14 28 L22 10 L30 28 Z" fill={c} opacity="0.55" />
        <path d="M22 28 L28 16 L34 28 Z" fill={c} opacity="0.28" />
      </svg>
      {!compact && (
        <div className="leading-none">
          <div
            className={cn(
              "font-display text-[18px] font-bold uppercase tracking-[0.18em]",
              inverse ? "text-white" : "text-black",
            )}
          >
            Sibillini
          </div>
          <div
            className={cn(
              "font-display text-[11px] font-medium uppercase tracking-[0.42em]",
              inverse ? "text-white/70" : "text-[#767677]",
            )}
          >
            Impact
          </div>
        </div>
      )}
    </a>
  );
}

export function Btn({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "inverse" | "outline" | "outline-inv" | "text";
}) {
  const base =
    "inline-flex items-center justify-center h-14 px-6 font-sans text-[13px] font-bold uppercase tracking-[0.16em] transition-colors duration-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-40";
  const variants = {
    primary:
      "bg-black text-white hover:bg-[#1d1d1d] hover:shadow-[inset_0_0_0_1px_#fff] active:bg-[#3c3c3c]",
    inverse:
      "bg-white text-black hover:bg-[#f5f5f5] focus-visible:outline-white",
    outline:
      "bg-transparent text-black border border-black hover:bg-black hover:text-white",
    "outline-inv":
      "bg-transparent text-white border border-white hover:bg-white hover:text-black focus-visible:outline-white",
    text: "h-auto px-0 bg-transparent text-black tracking-[0.14em]",
  };
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function SectionHead({
  kicker,
  title,
  body,
  inverse = false,
  align = "left",
}: {
  kicker?: string;
  title: string;
  body?: ReactNode;
  inverse?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={cn(align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-4xl")}>
      {kicker && (
        <div
          className={cn(
            "mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em]",
            inverse ? "text-white/60" : "text-[#767677]",
            align === "center" && "justify-center",
          )}
        >
          <Stripes className="w-8" size="sm" color={inverse ? "#fff" : "#000"} />
          {kicker}
        </div>
      )}
      <h2
        className={cn(
          "font-display text-[40px] md:text-[56px] lg:text-[64px] font-bold uppercase leading-[0.95] tracking-[0.04em]",
          inverse ? "text-white" : "text-black",
        )}
      >
        {title}
      </h2>
      {body && (
        <p
          className={cn(
            "mt-6 text-[16px] leading-[1.55] max-w-2xl",
            inverse ? "text-white/80" : "text-[#1d1d1d]",
            align === "center" && "mx-auto",
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-4 md:px-8", className)}>{children}</div>;
}

export function Hairline({ inverse = false }: { inverse?: boolean }) {
  return <div className={cn("h-px w-full", inverse ? "bg-white/20" : "bg-black")} />;
}
