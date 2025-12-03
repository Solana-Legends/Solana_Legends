// src/components/guardians/GuardianRoomMonkeSol.tsx
export default function GuardianRoomMonkeSol() {
  return (
    <section className="relative px-6 py-16 bg-gradient-to-b from-slate-900 to-slate-800 rounded-xl shadow-lg overflow-hidden">
      {/* ✨ Fondo ritualizado con aura cálida */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7f1d1d,#0f172a)] opacity-70 animate-pulse" />

      {/* 🔥 Símbolos ancestrales flotando */}
      <div className="absolute top-10 left-1/4 text-red-500 text-4xl animate-bounce">
        卍
      </div>
      <div className="absolute bottom-12 right-1/3 text-orange-400 text-3xl animate-ping">
        ☯
      </div>
      <div className="absolute top-1/2 left-2/3 text-yellow-500 text-2xl animate-spin">
        ✦
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-red-400 mb-4 animate-fadeInUp">
          🔥 MonkeSol
        </h3>
        <p
          className="text-lg md:text-xl text-orange-300 mb-6 animate-fadeInUp"
          style={{ animationDelay: "0.3s" }}
        >
          El Guardián Sabio, protector de la sabiduría ancestral y los secretos
          del blockchain.
        </p>

        {/* Imagen ritualizada */}
        <div
          className="flex justify-center mb-8 animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        >
          <img
            src="/images/guardians/Monk.png"
            alt="MonkeSol"
            className="w-64 h-64 object-contain drop-shadow-[0_0_25px_#f87171]"
          />
        </div>

        {/* Frase ritualizada */}
        <blockquote
          className="italic text-orange-400 text-lg md:text-xl animate-fadeInUp"
          style={{ animationDelay: "0.9s" }}
        >
          “El fuego controlado es la llama que guía a la comunidad hacia la
          sabiduría.”
        </blockquote>
      </div>
    </section>
  );
}
