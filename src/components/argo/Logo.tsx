type LogoProps = {
  className?: string;
  variant?: "default" | "inverted";
};

/**
 * ArgoSentIA wordmark + symbol (open book / connected people).
 * Text is rendered as real text so letter counters (A, g, o) stay transparent.
 */
export function Logo({ className = "", variant = "default" }: LogoProps) {
  const isInverted = variant === "inverted";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        role="img"
        aria-label="ArgoSentIA"
        className="h-9 w-9 shrink-0"
        fill="none"
      >
        <rect
          width="40"
          height="40"
          rx="12"
          fill={isInverted ? "currentColor" : "url(#argo-mark)"}
          opacity={isInverted ? 0.14 : 1}
        />
        <path
          d="M20 13.5c-2.4-1.9-5.2-2.4-8.2-2.1v14.3c3-.3 5.8.2 8.2 2.1 2.4-1.9 5.2-2.4 8.2-2.1V11.4c-3-.3-5.8.2-8.2 2.1Z"
          stroke={isInverted ? "currentColor" : "white"}
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M20 13.5v14.3" stroke={isInverted ? "currentColor" : "white"} strokeWidth="1.8" />
        <circle cx="14.6" cy="30.6" r="2" fill={isInverted ? "currentColor" : "white"} />
        <circle cx="25.4" cy="30.6" r="2" fill={isInverted ? "currentColor" : "white"} />
        <defs>
          <linearGradient id="argo-mark" x1="0" y1="0" x2="40" y2="40">
            <stop stopColor="var(--navy)" />
            <stop offset="0.65" stopColor="var(--teal)" />
            <stop offset="1" stopColor="var(--green)" />
          </linearGradient>
        </defs>
      </svg>
      <span
        className={`text-[1.28rem] font-extrabold tracking-tight ${
          isInverted ? "text-primary-foreground" : "text-navy"
        }`}
      >
        ArgoSent<span className={isInverted ? "text-green" : "text-teal"}>IA</span>
      </span>
    </span>
  );
}
