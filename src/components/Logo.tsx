import logoSrc from "@/assets/logo-impulso-stone-dark.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="Impulso Stone"
      className={`h-8 w-auto ${className}`}
    />
  );
}
