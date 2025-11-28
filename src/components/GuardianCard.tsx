import { useLanguage } from "@/contexts/LanguageContext";

interface GuardianCardProps {
  id?: string;
  name: string;
  title: string;
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

  // Selección de clase de aura según el guardián
  const auraClass =
    id === "zapsol"
      ? "aura-zapsol"
      : id === "monkesol"
      ? "aura-monkesol"
      : id === "chipisol"
      ? "aura-chipisol"
      : "";

  // Símbolo elemental según el guardián
  const elementalSymbol =
    id === "zapsol"
      ? "⚡️"
      : id === "monkesol"
      ? "🔥"
      : id === "chipisol"
      ? "❄️"
      : "";

  // Color opcional para cada símbolo
  const symbolColor =
    id === "zapsol"
      ? "text-yellow-400"
      : id === "monkesol"
      ? "text-red-500"
      : id === "chipisol"
      ? "text-blue-300"
      : "";

  return (
    <div
      data-id={id}
      className="relative bg-slate-800 rounded-xl p-6 shadow-lg text-left"
    >
      {/* Imagen con aura personalizada */}
      <img
        src={image}
        alt={name}
        className={`absolute top-4 left-4 w-16 h-16 object-contain rounded-md ${auraClass}`}
      />

      {/* Símbolo elemental arriba a la derecha */}
      <div
        className={`absolute top-4 right-4 text-3xl drop-shadow-lg ${symbolColor}`}
      >
        {elementalSymbol}
      </div>

      {/* Contenido con margen superior para no solaparse con la imagen */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold">
          {aura} {name}
        </h2>
        <p className="text-blue-300 italic">{title}</p>
        <p className="mt-2 text-sm">{description[language]}</p>
        <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-orange-900 font-semibold px-4 py-2 rounded">
          {t("characters.voteFor")} {name}
        </button>
      </div>
    </div>
  );
}
