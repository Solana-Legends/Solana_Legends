interface ProgressBarProps {
  percent: number;
  aura?: boolean;
}

export function ProgressBar({ percent, aura = false }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, percent));

  // Unificamos el gradiente con el estilo eléctrico de ZapSol y el estado de "Ignición"
  const gradient = "from-yellow-400 to-orange-500";

  return (
    <div className="relative w-full">
      {/* Contenedor principal de la barra */}
      <div className="relative w-full h-3 md:h-3.5 rounded-full bg-[#0F0B1E] overflow-hidden border border-[#FFA908]/40 shadow-[0_0_15px_rgba(255,169,8,0.2)] z-10">
        
        {/* Barra de progreso (Solución al fantasma del CSS) */}
        <div
          className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-1000 ease-out ${
            aura ? "animate-[pulse_2s_infinite]" : ""
          }`}
          style={{ width: `${clamped}%` }}
        />

        {/* Brillo interior dorado cuando está activa */}
        {aura && (
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_rgba(255,255,255,0.4)] mix-blend-overlay pointer-events-none" />
        )}
      </div>

      {/* Aura exterior cósmica (reemplaza al animate-ping tosco) */}
      {aura && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[102%] h-[200%] rounded-full blur-md bg-yellow-500/20 pointer-events-none z-0" />
      )}
    </div>
  );
}