import { useLanguage } from "@/contexts/LanguageContext";

interface GuardianCardProps {
  id?: string; // opcional si no lo usas
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

  return (
    <div
      data-id={id}
      className="bg-slate-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
    >
      <img
        src={image}
        alt={name}
        className="rounded-lg mb-4 w-full h-auto"
      />
      <h2 className="text-2xl font-bold">
        {aura} {name}
      </h2>
      <p className="text-blue-300 italic">{title}</p>
      <p className="mt-2 text-sm">{description[language]}</p>
      <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-orange-900 font-semibold px-4 py-2 rounded">
        {t("characters.voteFor")} {name}
      </button>
    </div>
  );
}
