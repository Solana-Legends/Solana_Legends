import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Twitter, Activity } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMetrics } from "@/hooks/useMetrics";

export default function FollowerCounter() {
  const { t } = useLanguage();
  const { metrics, isLoading } = useMetrics();

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E] aura-pulsante aura-hover-gold overflow-hidden">
      {/* Aura cósmica detrás */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-[#FFA908]/20 animate-pulse pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4">
        <div className="text-center mb-12 relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("progress.title")}
          </h2>
          <p className="text-indigo-200 text-lg">{t("progress.subtitle")}</p>
        </div>

        {/* --- PANEL DE ESTADO DEL NÚCLEO --- */}
        <div className="w-full max-w-[960px] mx-auto relative z-20">
          <Card className="bg-[#1A1530]/40 border-2 border-[#FFA908]/30 rounded-xl hover:shadow-[0_0_25px_#FFA908] transition-all duration-300 relative overflow-hidden group">
            {/* Resplandor de fondo interactivo */}
            <div className="absolute inset-0 bg-yellow-500/5 pointer-events-none z-0"></div>

            <CardHeader className="text-center relative z-10">
              <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
                <Activity className="h-6 w-6 text-yellow-400" />
                {t("progress.coreStatus")}
              </CardTitle>
              <CardDescription className="text-[#FFA908] font-medium text-base">
                {t("progress.architectureOnline")}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 relative z-10">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-purple-300">
                    {t("progress.systemCapacity")}
                  </span>
                  <span className="text-[#FFA908] font-bold tracking-wider">
                    {t("progress.maximum")}
                  </span>
                </div>

                <div className="relative w-full h-3 rounded-full border border-[#FFA908]/40 bg-[#1A1530] overflow-hidden shadow-[0_0_15px_rgba(255,169,8,0.3)]">
                  {/* Barra al 100% latiendo - FORZADA MANUALMENTE PARA EVITAR CONFLICTOS CSS */}
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-[pulse_2s_infinite] rounded-full" 
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div className="text-center">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-[#0F0B1E] font-bold border-0 px-5 py-2 shadow-[0_0_15px_#FFA908] text-sm md:text-base">
                  {t("progress.protocolActive")}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tarjetas de redes sociales (Métricas puras) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-[960px] mx-auto relative z-20">
          {/* Twitter */}
          <Card className="w-full bg-[#1A1530]/40 border border-[#FFA908]/30 rounded-xl hover:shadow-[0_0_25px_#FFA908] hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <Twitter className="h-8 w-8 text-blue-400" />
              </div>
              <CardTitle className="text-white">
                {t("progress.twitter")}
              </CardTitle>
              <CardDescription className="text-purple-300">
                @EligeTuMeme
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">
                {isLoading ? "..." : metrics.twitter}
              </div>
              <p className="text-sm text-purple-300 mb-2">
                {t("progress.followers")}
              </p>
              <a
                href="https://x.com/EligeTuMeme"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg transition-all duration-300 aura-hover aura-pulsante"
              >
                {t("progress.follow")}
              </a>
            </CardContent>
          </Card>

          {/* Comunidad X */}
          <Card className="w-full bg-[#1A1530]/40 border border-[#FFA908]/30 rounded-xl hover:shadow-[0_0_25px_#FFA908] hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <CardTitle className="text-white">
                {t("progress.community")}
              </CardTitle>
              <CardDescription className="text-purple-300">
                Solana Legends
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">
                {isLoading ? "..." : metrics.community}
              </div>
              <p className="text-sm text-purple-300 mb-2">
                {t("progress.members")}
              </p>
              <a
                href="https://x.com/i/communities/1976865385971360174"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-lg transition-all duration-300 aura-hover aura-pulsante"
              >
                {t("progress.joinCommunity")}
              </a>
            </CardContent>
          </Card>

          {/* Telegram */}
          <Card className="w-full bg-[#1A1530]/40 border border-[#FFA908]/30 rounded-xl hover:shadow-[0_0_25px_#FFA908] hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <MessageCircle className="h-8 w-8 text-cyan-400" />
              </div>
              <CardTitle className="text-white">
                {t("progress.telegram")}
              </CardTitle>
              <CardDescription className="text-purple-300">
                {t("progress.officialGroup")}
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">
                {isLoading ? "..." : metrics.telegram}
              </div>
              <p className="text-sm text-purple-300 mb-2">
                {t("progress.members")}
              </p>
              <a
                href="https://t.me/EligeTuMeme/1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1.5 rounded-lg transition-all duration-300 aura-hover aura-pulsante"
              >
                {t("progress.joinTelegram")}
              </a>
            </CardContent>
          </Card>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* ZAPSOL: Mantenido EXACTAMENTE igual en posición, tamaño y aura */}
        {/* ------------------------------------------------------------- */}
        <div
          className="
            absolute 
            bottom-[2rem] right-[-6rem]
            md:bottom-0 md:right-0
            mb-[4rem] mr-[2rem]
            animate-in fade-in slide-in-from-left duration-1000"
        >
          <div className="relative z-10 flex justify-center items-center w-80 h-80 group">
            <div className="absolute w-80 h-80 rounded-full blur-3xl hero-zapsol-aura pointer-events-none z-0 transition-colors duration-500 group-hover:bg-orange-500/40"></div>
            <img
              src="/assets/ZapSol.png"
              alt="ZapSol Hero"
              className="relative z-10 h-44 w-auto md:h-64 object-contain mix-blend-overlay opacity-90 symbol-hero-zapsol-flicker"
            />
          </div>
        </div>
        {/* ------------------------------------------------------------- */}

        {/* 🔮 Mensaje ritualizado centrado */}
        <div className="text-center mt-12 relative z-20">
          <p className="text-sm text-zinc-400 italic animate-fadeIn animate-pulseSlow">
            {t("progress.renewalMessage")}
          </p>
        </div>

      </div>
    </section>
  );
}