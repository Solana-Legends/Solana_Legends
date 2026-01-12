// src/components/particles/LightningParticle.tsx
interface LightningParticleProps {
  animationClass: string;
  cycleKey: number;
}

export default function LightningParticle({
  animationClass,
  cycleKey,
}: LightningParticleProps) {
  const top = `${Math.random() * 100}%`;
  const left = `${Math.random() * 100}%`;

  const className = `lightning-${cycleKey}-${Math.floor(Math.random() * 100000)}`;

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
          absolute text-xl text-yellow-400
          drop-shadow-[0_0_12px_#facc15]
          ${animationClass}
          ${className}
        `}
      >
        ⚡
      </div>
    </>
  );
}
