import logoArgosSentIA from "@/assets/logo_argossentiia.webp";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return <img src={logoArgosSentIA} alt="ArgosSentIA" className={`h-9 w-auto ${className}`} />;
}
