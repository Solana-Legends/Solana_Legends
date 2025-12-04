// src/components/guardians/GuardianGallery.tsx
import { useLanguage } from "@/contexts/LanguageContext";
import GuardianRoomZapSol from "@/components/guardians/GuardianRoomZapSol";
import GuardianRoomMonkeSol from "@/components/guardians/GuardianRoomMonkeSol";
import GuardianRoomChipiSol from "@/components/guardians/GuardianRoomChipiSol";
import GuardianTimeline from "@/components/guardians/GuardianTimeline";
import VideoWithControls from "@/components/VideoWithControls";

export default function GuardianGallery() {
  const { t } = useLanguage();

  return (
    <section className="relative px-4 py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Introducción */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">{t("gallery.title")}</h2>
        <p className="text-lg text-blue-300">{t("gallery.subtitle")}</p>
      </div>

      {/* Videos */}
      <div className="grid md:grid-cols-2 gap-8 mb-6 -mt-9 max-w-4xl mx-auto">
        <div className="animate-in fade-in slide-in-from-left duration-1000">
          <div className="relative group rounded-xl overflow-hidden transition-shadow duration-300 hover:scale-[1.02] border border-purple-500/40 aura-pulsante aura-hover">
            <VideoWithControls
              src="/assets/HéroesVolando.mp4"
              glowColor="#A020F0"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
        <div className="animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative group rounded-xl overflow-hidden transition-shadow duration-300 hover:scale-[1.02] border border-blue-400/40 aura-pulsante-blue aura-hover-gold">
            <VideoWithControls
              src="/assets/HeroesEspac.mp4"
              glowColor="#00BFFF"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* 🔀 Transición hacia GuardianRoomZapSol */}
      <div className="relative w-full h-24 bg-gradient-to-b from-purple-500/30 via-blue-400/30 to-yellow-400/40 animate-pulse mt-8 mb-12 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center">
          {/* Halo eléctrico que abre la sala de ZapSol */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400 blur-3xl opacity-70 animate-ping"></div>
        </div>
      </div>

      {/* Salas */}
      <GuardianRoomZapSol />
      <GuardianRoomMonkeSol />
      <GuardianRoomChipiSol />

      {/* Cronología */}
      <GuardianTimeline />

      {/* Cierre */}
      <footer className="mt-20 text-center text-yellow-500 italic">
        {t("gallery.footer")}
      </footer>
    </section>
  );
}
