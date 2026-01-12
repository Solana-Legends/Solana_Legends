// src/components/particles/PointParticle.tsx
interface PointParticleProps {
  animationClass: string;
  cycleKey: number;
}

export default function PointParticle({ animationClass, cycleKey }: PointParticleProps) {
  const top = `${Math.random() * 100}%`;
  const left = `${Math.random() * 100}%`;

  // Clase única por partícula
  const className = `point-${cycleKey}-${Math.floor(Math.random() * 100000)}`;

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
          absolute w-2 h-2 rounded-full bg-white opacity-80 
          drop-shadow-[0_0_8px_#22d3ee] 
          ${animationClass} 
          ${className}
        `}
      />
    </>
  );
}
