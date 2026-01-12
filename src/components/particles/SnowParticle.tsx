// src/components/particles/SnowParticle.tsx
interface SnowParticleProps {
  animationClass: string;
  cycleKey: number;
}

export default function SnowParticle({ animationClass, cycleKey }: SnowParticleProps) {
  const top = `${Math.random() * 100}%`;
  const left = `${Math.random() * 100}%`;

  // Clase única por partícula
  const className = `snow-${cycleKey}-${Math.floor(Math.random() * 100000)}`;

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
          absolute text-xl text-blue-200 
          drop-shadow-[0_0_12px_#22d3ee] 
          ${animationClass} 
          ${className}
        `}
      >
        ❄️
      </div>
    </>
  );
}
