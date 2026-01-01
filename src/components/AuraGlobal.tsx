export default function AuraGlobal() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
      {/* Fondo base sincronizado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E]" />

      {/* 🔥 Aura de fuego ritual — pulsos irregulares */}
      <div className="
        absolute top-1/2 left-1/2 
        w-[1400px] h-[1400px] 
        -translate-x-1/2 -translate-y-1/2 
        rounded-full blur-[200px] 
        bg-gradient-to-br from-amber-500/20 via-orange-600/20 to-red-600/20
        animate-[firePulse_6s_infinite]
      " />

      {/* 🔥 Aura secundaria más pequeña, como un núcleo ardiente */}
      <div className="
        absolute top-1/2 left-1/2 
        w-[700px] h-[700px] 
        -translate-x-1/2 -translate-y-1/2 
        rounded-full blur-[160px] 
        bg-gradient-to-br from-yellow-400/25 via-orange-500/25 to-red-500/25
        animate-[fireBreath_4s_infinite]
      " />

      {/* 🔥 Chispas suaves alrededor (muy sutiles) */}
      <div className="
        absolute inset-0 
        bg-[radial-gradient(circle_at_20%_30%,rgba(255,180,80,0.08),transparent_70%)]
      " />
      <div className="
        absolute inset-0 
        bg-[radial-gradient(circle_at_80%_70%,rgba(255,120,60,0.08),transparent_70%)]
      " />

      {/* Animaciones personalizadas */}
      <style>{`
        @keyframes firePulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
          25% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.85; }
          50% { transform: translate(-50%, -50%) scale(0.97); opacity: 0.65; }
          75% { transform: translate(-50%, -50%) scale(1.08); opacity: 0.9; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
        }

        @keyframes fireBreath {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
