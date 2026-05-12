import logoSrc from "@/assets/logo-impulso-stone.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="Impulso Stone"
      className={`h-8 w-auto ${className}`}
    />
  );
}
