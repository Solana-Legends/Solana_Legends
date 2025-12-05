<div className="absolute inset-0 pointer-events-none">
  {Array.from({ length: 20 }).map((_, i) => {
    const isSnow = i % 2 === 0; // alterna entre copos y puntos

    // Animación principal según tipo
    const animationClass = isSnow
      ? i % 3 === 0
        ? "animate-pulse"
        : i % 3 === 1
        ? "animate-flicker"
        : "animate-float"
      : i % 3 === 0
      ? "animate-float"
      : i % 3 === 1
      ? "animate-bounce"
      : "animate-ping";

    // Cada elemento combina su animación principal + fade in/out
    const combinedClass = `${animationClass} animate-fade-cycle`;

    return isSnow ? (
      <div
        key={i}
        className={`absolute text-xl text-blue-200 ${combinedClass} drop-shadow-[0_0_12px_#22d3ee]`}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: "20s", // ciclo completo
          animationDelay: `${Math.random() * 5}s`, // cada copo empieza distinto
        }}
      >
        ❄️
      </div>
    ) : (
      <div
        key={i}
        className={`absolute w-2 h-2 bg-white rounded-full opacity-70 ${combinedClass}`}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: "20s", // ciclo completo
          animationDelay: `${Math.random() * 5}s`, // cada punto empieza distinto
        }}
      />
    );
  })}
</div>;
