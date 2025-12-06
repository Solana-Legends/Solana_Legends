// src/components/guardians/GuardianRoomChipiSol.tsx
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

type SnowPoint = {
  x: number;
  y: number;
  transitionDuration: string;
  scale: number;
  layer: "foreground" | "midground" | "background";
  rotationSpeed: string;
  opacity: number;
};

export default function GuardianRoomChipiSol() {
  const { t } = useLanguage();

  const [positions, setPositions] = useState<SnowPoint[]>(
    Array.from({ length: 30 }).map((_, i) => {
      const layer =
        i % 3 === 0 ? "foreground" : i % 3 === 1 ? "midground" : "background";
      return {
        x: Math.random() * 100,
        y: Math.random() * 100,
        transitionDuration: `${1 + Math.random() * 3}s`,
        scale:
          layer === "foreground"
            ? 1 + Math.random() * 1.5
            : layer === "midground"
            ? 0.7 + Math.random() * 1
            : 0.4 + Math.random() * 0.6,
        layer,
        rotationSpeed: `${10 + Math.random() * 20}s`,
        opacity:
          layer === "foreground" ? 0.9 : layer === "midground" ? 0.7 : 0.5,
      };
    })
  );

  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX / innerWidth - 0.5) * 20;
      const offsetY = (e.clientY / innerHeight - 0.5) * 20;
      setParallax({ x: offsetX, y: offsetY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // ✅ Corrección: actualizar posiciones sin recrear el array completo
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) =>
        prev.map((p) => ({
          ...p,
          x: Math.random() * 100,
          y: Math.random() * 100,
          transitionDuration: `${1 + Math.random() * 3}s`,
          scale:
            p.layer === "foreground"
              ? 1 + Math.random() * 1.5
              : p.layer === "midground"
              ? 0.7 + Math.random() * 1
              : 0.4 + Math.random() * 0.6,
          rotationSpeed: `${10 + Math.random() * 20}s`,
          opacity:
            p.layer === "foreground"
              ? 0.9
              : p.layer === "midground"
              ? 0.7
              : 0.5,
        }))
      );
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-6 py-16 bg-gradient-to-b from-slate-800 to-slate-700 rounded-xl shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0ea5e9,#0f172a)] opacity-70 animate-pulse" />

      <div className="absolute inset-0 pointer-events-none">
        {positions.map((pos, i) => {
          const isSnow = i % 2 === 0;
          const animationClass = isSnow
            ? i % 3 === 0
              ? "animate-pulse"
              : i % 3 === 1
              ? "animate-flicker"
              : "animate-float"
            : i % 3 === 0
            ? "animate-float"
            : i % 3 === 1
            ? "animate-pulse"
            : "animate-ping";

          const parallaxFactor =
            pos.layer === "foreground"
              ? 1.5
              : pos.layer === "midground"
              ? 1
              : 0.5;

          return (
            <div
              key={i}
              className="absolute fade-cycle"
              style={{
                top: `${pos.y}%`,
                left: `${pos.x}%`,
                transform: `translate(${parallax.x * parallaxFactor}px, ${
                  parallax.y * parallaxFactor
                }px) scale(${pos.scale}) rotate(${Math.random() * 360}deg)`,
                transition: `transform ${pos.transitionDuration} ease-in-out, opacity 2s ease-in-out`,
                animationDelay: `${Math.random() * 20}s`,
                opacity: pos.opacity,
              }}
            >
              {isSnow ? (
                <div
                  className={`text-xl text-blue-200 ${animationClass} drop-shadow-[0_0_12px_#22d3ee]`}
                  style={{
                    animationDuration: pos.rotationSpeed,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                >
                  ❄️
                </div>
              ) : (
                <div
                  className={`w-2 h-2 bg-white rounded-full ${animationClass}`}
                  style={{
                    animationDuration: pos.rotationSpeed,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4 animate-fadeInUp">
          {t("chipisol.title")}
        </h3>
        <p
          className="text-lg md:text-xl text-blue-200 mb-6 animate-fadeInUp"
          style={{ animationDelay: "0.3s" }}
        >
          {t("chipisol.subtitle")}
        </p>

        <div
          className="flex justify-center mb-8 animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        >
          <img
            src="/images/guardians/Chip2.png"
            alt="ChipiSol"
            className="w-80 h-80 object-contain drop-shadow-[0_0_25px_#22d3ee]"
          />
        </div>

        <div className="absolute bottom-0 right-0 mb-[4rem] mr-[-4rem] animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative z-10 flex justify-center items-center w-80 h-80 group">
            <div className="absolute w-80 h-80 rounded-full blur-3xl hero-chipisol-aura pointer-events-none z-0 transition-colors duration-500 group-hover:bg-cyan-400/40"></div>
            <img
              src="/assets/ChipiSolVol.png"
              alt="ChipiSol Hero"
              className="relative z-10 h-64 w-auto md:h-72 object-contain mix-blend-overlay opacity-90 symbol-hero-chipisol"
            />
          </div>
        </div>

        <blockquote
          className="italic text-cyan-300 text-lg md:text-xl animate-fadeInUp"
          style={{ animationDelay: "0.9s" }}
        >
          {t("chipisol.quote")}
        </blockquote>
      </div>
    </section>
  );
}
