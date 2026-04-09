import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Twitter, MessageCircle, Users, Share2, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMetrics } from "@/hooks/useMetrics";

export default function SocialLinks() {
  const { t, language } = useLanguage();
  const { metrics } = useMetrics();

  const socialPlatforms = [
    {
      name: t("progress.twitter"),
      handle: "@EligeTuMeme",
      followers: `${metrics.twitter} ${t("progress.followers")}`,
      url: "https://x.com/EligeTuMeme",
      icon: Twitter,
      color: "bg-blue-600 hover:bg-blue-700",
      description: t("social.followLatest"),
    },
    {
      name: t("progress.community"),
      handle: "Solana Legends",
      followers: `${metrics.community} ${t("progress.members")}`,
      url: "https://x.com/i/communities/1976865385971360174",
      icon: Users,
      color: "bg-purple-600 hover:bg-purple-700",
      description: t("social.joinOurCommunity"),
    },
    {
      name: t("progress.telegram"),
      handle: t("progress.officialGroup"),
      followers: `${metrics.telegram} ${t("progress.members")}`,
      url: "https://t.me/EligeTuMeme",
      icon: MessageCircle,
      color: "bg-cyan-600 hover:bg-cyan-700",
      description: t("social.realTimeChat"),
    },
  ];

  const shareText =
    language === "es"
      ? "🪐 ¡El Ritual ha concluido! La arquitectura de ZapSol ⚡ domina la red de Solana Legends. Entra al portal y únete al fuego. #Solana #ZapSol #Crypto \n"
      : "🪐 The Ritual is complete! ZapSol ⚡ architecture dominates the Solana Legends network. Enter the portal and join the fire. #Solana #ZapSol #Crypto \n";

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleShare = (platform: string) => {
    let url = "";
    switch (platform) {
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          shareText
        )}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "telegram":
        url = `https://t.me/share/url?url=${encodeURIComponent(
          shareUrl
        )}&text=${encodeURIComponent(shareText)}`;
        break;
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(
          shareText + " " + shareUrl
        )}`;
        break;
      default:
        break;
    }
    if (url) window.open(url, "_blank");
  };

  return (
    <section
      id="community"
      className="relative flex flex-col justify-center items-center py-8 md:py-12 px-4 md:px-6 bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E] aura-pulsante aura-hover-gold min-h-screen overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-[#FFA908]/20 animate-pulse pointer-events-none z-0" />

      {/* Contenedor principal */}
      <div className="relative z-10 w-full max-w-[960px] mx-auto flex flex-col justify-center h-full">
        
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {t("social.title")}
          </h2>
          <p className="text-base md:text-lg text-indigo-200 max-w-3xl mx-auto px-2">
            {t("social.subtitle")}
          </p>
        </div>

        {/* Tarjetas de Plataformas Sociales (Comprimidas) */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6">
          {socialPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <Card
                key={platform.name}
                className="bg-[#1A1530]/60 border border-[#FFA908]/30 rounded-xl hover:shadow-[0_0_20px_#FFA908] hover:scale-105 transition-all duration-300 flex flex-col"
              >
                <CardHeader className="text-center pb-2 pt-4">
                  <div className="flex justify-center mb-2">
                    <div
                      className={`p-3 ${platform.color} rounded-full shadow-[0_0_15px_#FFA908]`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg">
                    {platform.name}
                  </CardTitle>
                  <CardDescription className="text-purple-300 text-xs">
                    {platform.handle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3 flex-grow flex flex-col justify-between pb-4">
                  <div>
                    <div className="text-xl font-bold text-yellow-300">
                      {platform.followers}
                    </div>
                    <p className="text-purple-200 text-xs mt-1">
                      {platform.description}
                    </p>
                  </div>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    <Button
                      className={`w-full ${platform.color} text-white font-semibold aura-hover aura-pulsante shadow-[0_0_10px_#FFA908] py-2 h-auto text-sm`}
                    >
                      {t("social.follow")}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mensaje ritualizado */}
        <div className="mb-6 text-xs text-center text-zinc-400 italic animate-fadeIn animate-pulseSlow">
          🔥 The fire is sustained by those who stay.
        </div>

        {/* Sección Compartir (Comprimida y Horizontal) */}
        <Card className="bg-[#1A1530]/60 border border-[#FFA908]/30 rounded-xl mb-4 hover:shadow-[0_0_20px_#FFA908] transition-all duration-300">
          <CardHeader className="text-center pb-2 pt-4">
            <CardTitle className="text-white text-lg flex items-center justify-center gap-2">
              <Share2 className="h-5 w-5 text-yellow-500" />
              {t("social.share")}
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex flex-row flex-wrap gap-3 justify-center">
              <Button
                onClick={() => handleShare("twitter")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold aura-hover aura-pulsante shadow-[0_0_10px_#FFA908] text-xs h-8"
              >
                <Twitter className="w-3.5 h-3.5 mr-1.5" />
                {t("social.shareX")}
              </Button>
              <Button
                onClick={() => handleShare("telegram")}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold aura-hover aura-pulsante shadow-[0_0_10px_#FFA908] text-xs h-8"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                {t("social.shareTelegram")}
              </Button>
              <Button
                onClick={() => handleShare("whatsapp")}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold aura-hover aura-pulsante shadow-[0_0_10px_#FFA908] text-xs h-8"
              >
                <Heart className="w-3.5 h-3.5 mr-1.5" />
                {t("social.shareWhatsapp")}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer (Ajustado) */}
        <div className="mt-auto text-center text-[10px] md:text-xs text-zinc-500 px-4 pb-2 z-20 relative">
          Solana Legends 🪐 EligeTuMeme™ ✨ © 2025
          <br />
          Official Bot:{" "}
          <a
            href="https://poco-mod-web.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-amber-400"
          >
            poco-mod-web.vercel.app 🤖
          </a>
          <br />
          Powered by community fire, ritualized progress, and cosmic guardianship.
        </div>
      </div>

      {/* Imagen ChipiSol - ELEVADA */}
      <div
        className="
          absolute 
          bottom-108 left-4 md:bottom-40 md:left-12
          w-28 h-28 md:w-48 md:h-48
          z-10
          animate-in fade-in slide-in-from-left duration-1000 pointer-events-none"
      >
        <div className="relative flex justify-center items-center w-full h-full group">
          <div className="absolute w-full h-full rounded-full blur-2xl hero-chipisol-aura z-0 transition-colors duration-500 group-hover:bg-white/40"></div>
          <img
            src="/assets/ChipiSol.png"
            alt="ChipiSol Hero"
            className="relative z-10 w-full h-full object-contain mix-blend-overlay opacity-90 symbol-hero-chipisol"
          />
        </div>
      </div>

    </section>
  );
}