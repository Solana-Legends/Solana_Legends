import { useLanguage } from "@/contexts/LanguageContext";

export default function GuardianTimeline() {
  const { t } = useLanguage();

  const timeline = [
    {
      year: "2023",
      title: t("timeline.monkesol.title"),
      description: t("timeline.monkesol.description"),
      color: "text-[#f87171]",
      glow: "shadow-[0_0_15px_rgba(248,113,113,0.3)]",
      bg: "bg-red-500/20",
      border: "border-red-500/30 hover:border-red-500/70",
      aura: "🔥",
    },
    {
      year: "2024",
      title: t("timeline.zapsol.title"),
      description: t("timeline.zapsol.description"),
      color: "text-[#FFA908]",
      glow: "shadow-[0_0_15px_rgba(255,169,8,0.3)]",
      bg: "bg-[#FFA908]/20",
      border: "border-[#FFA908]/30 hover:border-[#FFA908]/70",
      aura: "⚡",
    },
    {
      year: "2024",
      title: t("timeline.chipisol.title"),
      description: t("timeline.chipisol.description"),
      color: "text-cyan-400",
      glow: "shadow-[0_0_15px_rgba(34,211,238,0.3)]",
      bg: "bg-cyan-500/20",
      border: "border-cyan-500/30 hover:border-cyan-500/70",
      aura: "❄️",
    },
    {
      year: "2025",
      title: t("timeline.union.title"),
      description: t("timeline.union.description"),
      color: "text-purple-400",
      glow: "shadow-[0_0_15px_rgba(192,132,252,0.3)]",
      bg: "bg-purple-500/20",
      border: "border-purple-500/30 hover:border-purple-500/70",
      aura: "👑", // Cambiado a corona porque hay un rey oficial
    },
  ];

  return (
    <section className="relative w-full max-w-4xl mx-auto px-4 py-10 bg-transparent">
      
      {/* ⭐ Título principal */}
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {t("timeline.title")}
        </h3>
        <div className="w-24 h-1 bg-purple-500/50 mx-auto rounded-full shadow-[0_0_10px_#a855f7]"></div>
      </div>

      {/* ⭐ Timeline vertical estilizado */}
      <div className="relative border-l-[3px] border-purple-500/30 ml-4 md:ml-8">
        {timeline.map((item, index) => (
          <div 
            key={index} 
            className="mb-12 ml-8 md:ml-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both relative group"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            
            {/* Icono aura flotante en la línea */}
            <div className={`absolute -left-[2.15rem] md:-left-[2.4rem] top-0 w-12 h-12 rounded-full ${item.bg} border border-white/10 flex items-center justify-center text-xl md:text-2xl backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:${item.glow}`}>
              {item.aura}
            </div>

            {/* Tarjeta de Contenido */}
            <div className={`p-6 md:p-8 rounded-2xl bg-[#1A1530]/40 border ${item.border} backdrop-blur-md transition-all duration-500 group-hover:bg-[#1A1530]/80 group-hover:-translate-y-1 ${item.glow}`}>
              <div className={`text-sm md:text-base font-mono font-bold tracking-widest uppercase mb-2 ${item.color}`}>
                {item.year}
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {item.title}
              </h4>
              <p className="text-indigo-200/80 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>

          </div>
        ))}
      </div>

      {/* Cierre ritualizado */}
      <p className="text-center text-purple-400/80 italic mt-16 text-sm md:text-base font-light tracking-wide animate-pulse">
        {t("timeline.closure")}
      </p>
    </section>
  );
}