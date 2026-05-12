// TODO: trocar o SVG abaixo pela logo oficial do Impulso Stone.
// Exemplo: import logoSrc from "@/assets/logo-impulso-stone.svg";
// e usar: <img src={logoSrc} alt="Impulso Stone" className={`h-7 w-auto ${className}`} />

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Ícone placeholder — substituir pela logo real */}
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="30" height="30" rx="8" fill="var(--lime)" />
        <path
          d="M11 21.5c1.5 1 3.2 1.5 5 1.5 3.8 0 6-1.8 6-4.5 0-2.2-1.5-3.5-5-4.2-2.8-.6-4-1.4-4-3 0-1.5 1.5-2.8 4-2.8 1.6 0 3 .5 4.2 1.5"
          stroke="oklch(0.18 0 0)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <line x1="16" y1="7" x2="16" y2="9.5" stroke="oklch(0.18 0 0)" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="16" y1="22.5" x2="16" y2="25" stroke="oklch(0.18 0 0)" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span className="font-semibold tracking-tight text-lg text-foreground">
        impulso<span className="text-lime"> stone</span>
      </span>
    </div>
  );
}
