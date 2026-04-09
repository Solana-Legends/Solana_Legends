import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Zap, Shield, Sparkles, Users, Flame } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectInfo() {
  const { t, language } = useLanguage();

  // Enrutamiento táctico del Whitepaper basado en el idioma del usuario
  const whitepaperLink =
    language === "es"
      ? "https://solanalegends.notion.site/Solana-Legends-Portal-Narrativo-296baea9ce4f806a9494efaf4fa03a20?pvs=74"
      : "https://solanalegends.notion.site/Solana-Legends-Narrative-Portal-296baea9ce4f8098ae50cc68007b6b12";

  return (
    // min-h-screen y flex col center fuerzan la ocupación total de la pantalla
    <section className="relative w-full flex flex-col justify-center items-center py-6 md:py-10 px-4 md:px-6 bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E] aura-pulsante aura-hover-gold min-h-[90vh] md:min-h-screen">
      {/* ✨ Capa envolvente para aura completa */}
      <div className="absolute inset-0 z-0 pointer-events-none aura-pulsante aura-hover-gold" />

      {/* ✨ Aura cósmica dorada detrás del contenido */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-[#FFA908]/20 animate-pulse pointer-events-none z-0" />

      {/* Contenedor principal alineado con las secciones anteriores */}
      <div className="relative z-10 w-full max-w-[960px] mx-auto flex flex-col justify-center">
        
        {/* Cabecera */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">
            {t("project.title")}
          </h2>
          <p className="text-base md:text-lg text-indigo-200 max-w-3xl mx-auto px-2 leading-tight">
            {t("project.subtitle")}
          </p>
        </div>

        {/* Matriz de Tarjetas (2 columnas) */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          
          {/* Tarjeta del Manifiesto / Whitepaper (IZQUIERDA) */}
          <Card className="bg-[#1A1530]/60 border border-[#FFA908]/30 rounded-xl hover:shadow-[0_0_25px_#FFA908] transition-all duration-300 flex flex-col">
            <CardHeader className="pb-3 md:pb-4">
              <div className="flex items-center gap-3 mb-1">
                <div className="p-3 bg-yellow-500 rounded-lg shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                  <FileText className="h-6 w-6 text-[#0F0B1E]" />
                </div>
                <div>
                  <CardTitle className="text-white text-xl">
                    {t("project.whitepaper")}
                  </CardTitle>
                  <CardDescription className="text-[#FFA908] font-medium text-sm md:text-base">
                    {t("project.whitepaperDesc")}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow justify-between">
              <p className="text-purple-200 mb-4 leading-relaxed text-sm md:text-base">
                {t("project.whitepaperText")}
              </p>

              {/* --- TÁCTICO: BLOQUE DE RELLENO (Sustituye al espacio vacío) --- */}
              <div className="bg-[#0F0B1E]/60 border border-yellow-500/15 rounded-lg p-3 md:p-4 mb-5 shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]">
                <h4 className="text-white font-mono text-[11px] md:text-xs uppercase tracking-widest mb-2.5 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></div>
                   {t("project.ritualRules")}
                </h4>
                <ul className="space-y-1.5 text-indigo-200 font-mono text-xs md:text-sm">
                    <li>&gt; {t("project.rule1")}</li>
                    <li>&gt; {t("project.rule2")}</li>
                    <li>&gt; {t("project.rule3")}</li>
                </ul>
              </div>
              {/* ------------------------------------------------------------------ */}

              <a
                href={whitepaperLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto"
              >
                <Button
                  className="relative w-full overflow-hidden py-4 md:py-5
                             bg-gradient-to-r from-yellow-400 to-orange-500 
                             hover:from-yellow-500 hover:to-orange-600 
                             text-[#0F0B1E] font-bold text-base shadow-[0_0_20px_#FFA908] 
                             border border-yellow-300 transition-all duration-500 hover:scale-[1.02]"
                >
                  {t("project.readWhitepaper")}
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Tarjeta de Core Features (DERECHA) */}
          <Card className="bg-[#1A1530]/60 border border-[#FFA908]/30 rounded-xl hover:shadow-[0_0_15px_rgba(255,169,8,0.2)] transition-all duration-300 flex flex-col">
            <CardHeader className="pb-3 md:pb-4">
              <CardTitle className="text-white text-xl">
                {t("project.features")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow flex flex-col justify-start">
              <div className="flex items-center gap-3 bg-[#0F0B1E]/50 p-2.5 rounded-lg border border-yellow-500/10">
                <Flame className="h-4 w-4 md:h-5 md:w-5 text-orange-500 flex-shrink-0" />
                <span className="text-purple-200 text-sm md:text-base">{t("project.feature1")}</span>
              </div>
              <div className="flex items-center gap-3 bg-[#0F0B1E]/50 p-2.5 rounded-lg border border-yellow-500/10">
                <Zap className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-purple-200 text-sm md:text-base">{t("project.feature2")}</span>
              </div>
              <div className="flex items-center gap-3 bg-[#0F0B1E]/50 p-2.5 rounded-lg border border-yellow-500/10">
                <Shield className="h-4 w-4 md:h-5 md:w-5 text-cyan-400 flex-shrink-0" />
                <span className="text-purple-200 text-sm md:text-base">{t("project.feature3")}</span>
              </div>
              <div className="flex items-center gap-3 bg-[#0F0B1E]/50 p-2.5 rounded-lg border border-yellow-500/10">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-purple-400 flex-shrink-0" />
                <span className="text-purple-200 text-sm md:text-base">{t("project.feature4")}</span>
              </div>
              <div className="flex items-center gap-3 bg-[#0F0B1E]/50 p-2.5 rounded-lg border border-yellow-500/10">
                <Users className="h-4 w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0" />
                <span className="text-purple-200 text-sm md:text-base">{t("project.feature5")}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Matriz de Estadísticas Simbólicas (Stats) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-auto">
          <div className="text-center bg-[#1A1530]/40 p-3 md:p-4 rounded-lg border border-[#FFA908]/20">
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">3</div>
            <p className="text-purple-200 text-[11px] md:text-sm font-semibold">{t("project.stat1")}</p>
            <p className="text-yellow-500 text-[10px] md:text-xs italic mt-1 leading-tight">{t("project.stat1Aura")}</p>
          </div>
          <div className="text-center bg-[#1A1530]/40 p-3 md:p-4 rounded-lg border border-[#FFA908]/20">
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">100%</div>
            <p className="text-purple-200 text-[11px] md:text-sm font-semibold">{t("project.stat2")}</p>
            <p className="text-yellow-500 text-[10px] md:text-xs italic mt-1 leading-tight">{t("project.stat2Aura")}</p>
          </div>
          <div className="text-center bg-[#1A1530]/40 p-3 md:p-4 rounded-lg border border-[#FFA908]/20">
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">1</div>
            <p className="text-purple-200 text-[11px] md:text-sm font-semibold">{t("project.stat3")}</p>
            <p className="text-yellow-500 text-[10px] md:text-xs italic mt-1 leading-tight">{t("project.stat3Aura")}</p>
          </div>
          <div className="text-center bg-[#1A1530]/40 p-3 md:p-4 rounded-lg border border-[#FFA908]/20">
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">∞</div>
            <p className="text-purple-200 text-[11px] md:text-sm font-semibold">{t("project.stat4")}</p>
            <p className="text-yellow-500 text-[10px] md:text-xs italic mt-1 leading-tight">{t("project.stat4Aura")}</p>
          </div>
        </div>

      </div>
    </section>
  );
}