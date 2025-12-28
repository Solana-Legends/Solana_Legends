import { useLanguage } from "@/contexts/LanguageContext";

interface GuardianCardProps {
  id?: string;
  name: string;
  title: { en: string; es: string };
  aura: string;
  image: string;
  description: { en: string; es: string };
}

export default function GuardianCard({
  id,
  name,
  title,
  aura,
  image,
  description,
}: GuardianCardProps) {
  const { language, t } = useLanguage();

  // Aura de la tarjeta (cambia color en hover)
  const auraClass =
    id === "zapsol"
      ? "aura-zapsol"
      : id === "monkesol"
      ? "aura-monkesol"
      : id === "chipisol"
      ? "aura-chipisol"
      : "";

  // Animación en la foto del héroe
  const heroAnimation =
    id === "zapsol"
      ? "hero-zapsol"
      : id === "monkesol"
      ? "hero-monkesol"
      : id === "chipisol"
      ? "hero-chipisol"
      : "";

  // Aura en la foto del héroe
  const heroAura =
    id === "zapsol"
      ? "hero-zapsol-aura"
      : id === "monkesol"
      ? "hero-monkesol-aura"
      : id === "chipisol"
      ? "hero-chipisol-aura"
      : "";

  // Símbolo elemental
  const elementalSymbol =
    id === "zapsol"
      ? "⚡️"
      : id === "monkesol"
      ? "🔥"
      : id === "chipisol"
      ? "❄️"
      : "";

  // Color del símbolo
  const symbolColor =
    id === "zapsol"
      ? "text-yellow-400"
      : id === "monkesol"
      ? "text-red-500"
      : id === "chipisol"
      ? "text-blue-300"
      : "";

  // Animación del símbolo
  const symbolAnimation =
    id === "zapsol"
      ? "symbol-zapsol"
      : id === "monkesol"
      ? "symbol-monkesol"
      : id === "chipisol"
      ? "symbol-chipisol"
      : "";

  // Aura del símbolo
  const symbolAura =
    id === "zapsol"
      ? "symbol-zapsol-aura"
      : id === "monkesol"
      ? "symbol-monkesol-aura"
      : id === "chipisol"
      ? "symbol-chipisol-aura"
      : "";

  return (
    <div
      data-id={id}
      className={`relative bg-slate-800 rounded-xl p-6 shadow-lg text-left ${auraClass}`}
    >
      {/* Imagen con animación + aura */}
      <img
        src={image}
        alt={name}
        className={`absolute top-4 left-4 w-16 h-16 object-contain rounded-md ${heroAnimation} ${heroAura}`}
      />

      {/* Símbolo elemental arriba a la derecha con aura */}
      <div
        className={`absolute top-4 right-4 text-3xl drop-shadow-lg ${symbolColor} ${symbolAnimation} ${symbolAura}`}
      >
        {elementalSymbol}
      </div>

      {/* Contenido */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold">
          {aura} {name}
        </h2>
        <p className="text-blue-300 italic">{title[language]}</p>
        <p className="mt-2 text-sm">{description[language]}</p>
        <button className="mt-4 bg-yellow-400 hover:bg-yellow-700 text-orange-900 font-semibold px-4 py-2 rounded">
          {t("characters.voteFor")} {name}
        </button>
      </div>
    </div>
  );
}
