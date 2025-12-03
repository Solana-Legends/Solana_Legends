import GuardianRoomZapSol from "@/components/guardians/GuardianRoomZapSol";
import GuardianRoomMonkeSol from "@/components/guardians/GuardianRoomMonkeSol";
import GuardianRoomChipiSol from "@/components/guardians/GuardianRoomChipiSol";
import GuardianTimeline from "@/components/guardians/GuardianTimeline"; // 👈 nuevo import

export default function GuardianGallery() {
  return (
    <section className="relative px-4 py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Introducción */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Museo Virtual de los Guardianes
        </h2>
        <p className="text-lg text-blue-300">
          Explora las salas ritualizadas de ZapSol ⚡, MonkeSol 🔥 y ChipiSol ❄️
        </p>
      </div>

      {/* Salas */}
      <GuardianRoomZapSol />
      <GuardianRoomMonkeSol />
      <GuardianRoomChipiSol />

      {/* Cronología */}
      <GuardianTimeline />

      {/* Cierre */}
      <footer className="mt-20 text-center text-yellow-500 italic">
        Cada amanecer y cada ocaso, el fuego se renueva con vuestra energía
      </footer>
    </section>
  );
}
