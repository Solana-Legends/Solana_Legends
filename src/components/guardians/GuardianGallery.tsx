import { useLanguage } from "@/contexts/LanguageContext";
import GuardianRoomZapSol from "@/components/guardians/GuardianRoomZapSol";
import GuardianRoomMonkeSol from "@/components/guardians/GuardianRoomMonkeSol";
import GuardianRoomChipiSol from "@/components/guardians/GuardianRoomChipiSol";
import GuardianTimeline from "@/components/guardians/GuardianTimeline";

export default function GuardianGallery() {
  const { t } = useLanguage();

  return (
    <section className="relative px-4 py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Introducción */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">{t("gallery.title")}</h2>
        <p className="text-lg text-blue-300">{t("gallery.subtitle")}</p>
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
