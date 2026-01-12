// src/components/particles/PointParticleMonkeSol.tsx
interface PointParticleMonkeSolProps {
  animationClass: string;
  cycleKey: number;
}

export default function PointParticleMonkeSol({
  animationClass,
  cycleKey,
}: PointParticleMonkeSolProps) {
  const top = `${Math.random() * 100}%`;
  const left = `${Math.random() * 100}%`;

  // Clase única por partícula
  const className = `point-monke-${cycleKey}-${Math.floor(Math.random() * 100000)}`;

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
          bg-orange-400 opacity-80
          drop-shadow-[0_0_8px_#ef4444]
          ${animationClass}
          ${className}
        `}
      />
    </>
  );
}
