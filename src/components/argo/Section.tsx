import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  tone = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted" | "soft";
}) {
  const toneClass =
    tone === "muted" ? "bg-muted" : tone === "soft" ? "surface-soft" : "bg-background";

  return (
    <section id={id} className={`${toneClass} py-20 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} reveal`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-teal">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-extrabold leading-[1.15] md:text-[2.6rem]">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
