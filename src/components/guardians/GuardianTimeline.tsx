import { useLanguage } from "@/contexts/LanguageContext";

export default function GuardianTimeline() {
  const { t } = useLanguage();

  const timeline = [
    {
      year: "2023",
      title: t("timeline.monkesol.title"),
      description: t("timeline.monkesol.description"),
      color: "text-red-400",
      aura: "🔥",
    },
    {
      year: "2024",
      title: t("timeline.zapsol.title"),
      description: t("timeline.zapsol.description"),
      color: "text-yellow-400",
      aura: "⚡",
    },
    {
      year: "2024",
      title: t("timeline.chipisol.title"),
      description: t("timeline.chipisol.description"),
      color: "text-cyan-400",
      aura: "❄️",
    },
    {
      year: "2025",
      title: t("timeline.union.title"),
      description: t("timeline.union.description"),
      color: "text-purple-400",
      aura: "✦",
    },
  ];

  return (
    <section className="relative px-6 py-16 bg-gradient-to-b from-slate-700 to-slate-600 rounded-xl shadow-lg">
      <h3 className="text-3xl md:text-4xl font-bold text-center text-purple-300 mb-12">
        Cronología de los Guardianes
      </h3>

      <div className="relative border-l-4 border-purple-500 max-w-3xl mx-auto">
        {timeline.map((item, index) => (
          <div key={index} className="mb-12 ml-6 animate-fadeInUp relative">
            <div className="absolute -left-8 top-1 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-lg">
              {item.aura}
            </div>
            <div className={`font-bold ${item.color}`}>{item.year}</div>
            <h4 className={`text-xl md:text-2xl font-semibold ${item.color}`}>
              {item.title}
            </h4>
            <p className="text-gray-300 mt-2">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Cierre ritualizado bilingüe */}
      <p className="text-center text-purple-300 italic mt-12">
        {t("timeline.closure")}
      </p>
    </section>
  );
}
