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
      <div className="relative w-full h-2.5 rounded-full bg-zinc-800 overflow-hidden border border-zinc-600">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-[width] duration-700`}
          style={{ width: `${clamped}%` }}
        />

        <div
          className="pointer-events-none absolute inset-0 blur-md opacity-40"
          style={{
            background:
              "radial-gradient(120px 40px at 10% 50%, rgba(255,120,60,0.35), transparent), radial-gradient(120px 40px at 90% 50%, rgba(255,60,120,0.35), transparent)",
          }}
        />

        {aura && (
          <div className="absolute inset-0 rounded-full ring-2 ring-amber-400 animate-ping" />
        )}
      </div>
    </div>
  );
}
