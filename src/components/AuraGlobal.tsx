export default function AuraGlobal() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
      {/* Fondo base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E]" />

      {/* 🔥 Aura de fuego ritual — más intensa */}
      <div className="
        absolute top-1/2 left-1/2 
        w-[1600px] h-[1600px] 
        -translate-x-1/2 -translate-y-1/2 
        rounded-full blur-[220px] 
        bg-gradient-to-br from-amber-500/30 via-orange-600/30 to-red-600/30
        animate-[firePulse_5s_infinite]
      " />

      {/* 🔥 Núcleo ardiente más visible */}
      <div className="
        absolute top-1/2 left-1/2 
        w-[800px] h-[800px] 
        -translate-x-1/2 -translate-y-1/2 
        rounded-full blur-[180px] 
        bg-gradient-to-br from-yellow-400/35 via-orange-500/35 to-red-500/35
        animate-[fireBreath_3s_infinite]
      " />

      {/* 🔥 Chispas más marcadas */}
      <div className="
        absolute inset-0 
        bg-[radial-gradient(circle_at_20%_30%,rgba(255,180,80,0.12),transparent_70%)]
      " />
      <div className="
        absolute inset-0 
        bg-[radial-gradient(circle_at_80%_70%,rgba(255,120,60,0.12),transparent_70%)]
      " />

      <style>{`
        @keyframes firePulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
          25% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.7; }
          75% { transform: translate(-50%, -50%) scale(1.12); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
        }

        @keyframes fireBreath {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.9; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
