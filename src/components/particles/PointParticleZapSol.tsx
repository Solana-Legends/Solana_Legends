// src/components/particles/PointParticleZapSol.tsx
interface PointParticleZapSolProps {
  animationClass: string;
  cycleKey: number;
}

export default function PointParticleZapSol({
  animationClass,
  cycleKey,
}: PointParticleZapSolProps) {
  const top = `${Math.random() * 100}%`;
  const left = `${Math.random() * 100}%`;

  const className = `point-zap-${cycleKey}-${Math.floor(Math.random() * 100000)}`;

  return (
    <>
      <style>
        {`
          .${className} {
            top: ${top};
            left: ${left};
          }
        `}
      </style>

      <div
        className={`
          absolute w-2 h-2 rounded-full
          bg-gradient-to-r from-yellow-400 to-orange-400
          opacity-80
          drop-shadow-[0_0_8px_#facc15]
          ${animationClass}
          ${className}
        `}
      />
    </>
  );
}
