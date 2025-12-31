interface ProgressBarProps {
  percent: number;
  aura?: boolean;
}

export function ProgressBar({ percent, aura = false }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, percent));

  const gradient =
    clamped < 40
      ? "from-orange-400 via-amber-500 to-red-500"
      : clamped < 80
      ? "from-amber-500 via-orange-600 to-red-600"
      : "from-red-500 via-rose-600 to-fuchsia-600";

  return (
    <div className="relative w-full">
      <div className="relative w-full h-3 rounded-full bg-zinc-900 overflow-hidden border border-amber-400/40 shadow-[0_0_12px_rgba(255,200,80,0.15)]">
        
        {/* Barra */}
        <div
          className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-[width] duration-700`}
          style={{ width: `${clamped}%` }}
        />

        {/* Aura suave */}
        <div className="absolute inset-0 rounded-full blur-xl bg-amber-500/10 pointer-events-none" />

        {/* Aura dorada cuando se cumple el objetivo */}
        {aura && (
          <div className="absolute inset-0 rounded-full ring-2 ring-amber-400 animate-ping" />
        )}
      </div>
    </div>
  );
}
