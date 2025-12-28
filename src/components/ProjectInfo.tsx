import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Zap, Shield, Coins, Users, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectInfo() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 px-6 min-h-[600px] bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E] aura-pulsante aura-hover-gold">
      {/* ✨ Capa envolvente para aura completa */}
      <div className="absolute inset-0 z-0 pointer-events-none aura-pulsante aura-hover-gold" />

      {/* ✨ Aura cósmica dorada detrás del contenido */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-[#FFA908]/20 animate-pulse pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("project.title")}
          </h2>
          <p className="text-lg text-indigo-200 max-w-3xl mx-auto">
            {t("project.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* White Paper Card */}
          <Card className="bg-[#1A1530]/40 border border-[#FFA908]/30 rounded-xl hover:shadow-[0_0_25px_#FFA908] transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-yellow-500 rounded-lg">
                  <FileText className="h-6 w-6 text-[#0F0B1E]" />
                </div>
                <div>
                  <CardTitle className="text-white text-xl">
                    {t("project.whitepaper")}
                  </CardTitle>
                  <CardDescription className="text-purple-300">
                    {t("project.whitepaperDesc")}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-purple-200 mb-6 leading-relaxed">
                {t("project.whitepaperText")}
              </p>
              <a
                href="https://solanalegends.notion.site/Solana-Legends-Narrative-Portal-296baea9ce4f8098ae50cc68007b6b12"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Botón ritualizado con gradiente + destello */}
                <Button
                  className="relative w-full overflow-hidden 
                             bg-gradient-to-r from-yellow-400 to-orange-500 
                             hover:from-yellow-500 hover:to-orange-600 
                             text-[#0F0B1E] font-semibold shadow-[0_0_20px_#FFA908] 
                             border border-yellow-300 transition-all duration-500 
                             aura-hover aura-pulsante"
                >
                  {t("project.readWhitepaper")}
                  {/* Destello animado */}
                  <span
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent 
                                   translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
                  />
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Features Card */}
          <Card className="bg-[#1A1530]/40 border border-[#FFA908]/30 rounded-xl">
            <CardHeader>
              <CardTitle className="text-white text-xl mb-4">
                {t("project.features")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-yellow-300" />
                <span className="text-purple-200">{t("project.feature1")}</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-yellow-300" />
                <span className="text-purple-200">{t("project.feature2")}</span>
              </div>
              <div className="flex items-center gap-3">
                <Coins className="h-5 w-5 text-yellow-300" />
                <span className="text-purple-200">{t("project.feature3")}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-yellow-300" />
                <span className="text-purple-200">{t("project.feature4")}</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-yellow-300" />
                <span className="text-purple-200">{t("project.feature5")}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">3</div>
            <p className="text-purple-300 text-sm">{t("project.stat1")}</p>
            <p className="text-yellow-500 text-xs italic mt-1">
              {t("project.stat1Aura")}
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">500</div>
            <p className="text-purple-300 text-sm">{t("project.stat2")}</p>
            <p className="text-yellow-500 text-xs italic mt-1">
              {t("project.stat2Aura")}
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">1</div>
            <p className="text-purple-300 text-sm">{t("project.stat3")}</p>
            <p className="text-yellow-500 text-xs italic mt-1">
              {t("project.stat3Aura")}
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">∞</div>
            <p className="text-purple-300 text-sm">{t("project.stat4")}</p>
            <p className="text-yellow-500 text-xs italic mt-1">
              {t("project.stat4Aura")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
