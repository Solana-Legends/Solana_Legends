// src/components/particles/FireParticle.tsx
interface FireParticleProps {
  animationClass: string;
  cycleKey: number;
}

export default function FireParticle({ animationClass, cycleKey }: FireParticleProps) {
  const top = `${Math.random() * 100}%`;
  const left = `${Math.random() * 100}%`;

  // Clase única por partícula
  const className = `fire-${cycleKey}-${Math.floor(Math.random() * 100000)}`;

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
          absolute text-xl text-red-500 
          drop-shadow-[0_0_12px_#ef4444]
          ${animationClass}
          ${className}
        `}
      >
        🔥
      </div>
    </>
  );
}
