import { ProgressBar } from "./ProgressBar";
import { useLanguage } from "../contexts/LanguageContext";
import { useMetrics } from "@/hooks/useMetrics";
import { Rocket, ArrowRightLeft } from "lucide-react";

export default function ProgressSection() {
  const { t } = useLanguage();
  const { metrics, isLoading } = useMetrics();

  // Enlaces de Acción Táctica
  const pumpFunURL = "https://pump.fun/coin/GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump";
  const jupiterURL = "https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump";

  return (
    // Las clases 'min-h-screen flex flex-col justify-center' hacen que la sección ocupe todo el alto de la pantalla y centre el contenido verticalmente.
    <section className="relative w-full flex flex-col justify-center items-center bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E] px-4 md:px-6 py-12 md:py-16 min-h-screen">
      <div className="w-full max-w-[960px] mx-auto text-center flex flex-col items-center">
        
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-2">
          {t("progress.coreStatus")}
        </h2>

        <p className="text-sm md:text-base text-zinc-400 mb-10 max-w-2xl">
          {t("progress.subtitle")}
        </p>

        {/* --- MATRIZ DE TELEMETRÍA (Estructura Unificada) --- */}
        <div className="grid grid-cols-1 gap-5 w-full">
          
          {/* SYSTEM 1: ZAPSOL CORE */}
          {!isLoading && (
            <div className="bg-[#1A1530]/60 border border-[#FFA908]/20 p-5 rounded-lg flex flex-col justify-between">
              <div className="flex justify-between items-end mb-2.5">
                <p className="text-zinc-300 text-left font-mono text-xs md:text-sm">
                  &gt; SYSTEM.CORE: {t("progress.architectureOnline")}
                </p>
                <p className="text-[#FFA908] font-mono text-[11px] md:text-xs tracking-wide">[ONLINE]</p>
              </div>
              
              <ProgressBar percent={100} aura={true} />
              
              <p className="text-amber-400/80 font-mono text-[11px] md:text-xs mt-2.5 text-left">
                {t("progress.protocolActive")}
              </p>
            </div>
          )}

          {/* SYSTEM 2: TWITTER COMMS */}
          <div className="bg-[#1A1530]/60 border border-[#FFA908]/20 p-5 rounded-lg flex flex-col justify-between">
            <div className="flex justify-between items-end mb-2.5">
              <p className="text-zinc-300 text-left font-mono text-xs md:text-sm">
                &gt; COMMS.TWITTER: @EligeTuMeme
              </p>
              <p className="text-blue-400 font-mono text-[11px] md:text-xs tracking-wide">[UPLINK ESTABLISHED]</p>
            </div>
            
            <ProgressBar percent={100} aura={true} />
            
            <p className="text-zinc-400 font-mono text-[11px] md:text-xs mt-2.5 text-left">
              Telemetry Sync Active. {t("progress.followers")}: {metrics.twitter}
            </p>
          </div>

          {/* SYSTEM 3: TELEGRAM RELAY */}
          <div className="bg-[#1A1530]/60 border border-[#FFA908]/20 p-5 rounded-lg flex flex-col justify-between">
            <div className="flex justify-between items-end mb-2.5">
              <p className="text-zinc-300 text-left font-mono text-xs md:text-sm">
                &gt; RELAY.TELEGRAM: {t("progress.officialGroup")}
              </p>
              <p className="text-cyan-400 font-mono text-[11px] md:text-xs tracking-wide">[SECURE CHANNEL]</p>
            </div>
            
            <ProgressBar percent={100} aura={true} />
            
            <p className="text-zinc-400 font-mono text-[11px] md:text-xs mt-2.5 text-left">
              Data Feed Stable. {t("progress.members")}: {metrics.telegram}
            </p>
          </div>

          {/* SYSTEM 4: X COMMUNITY */}
          <div className="bg-[#1A1530]/60 border border-[#FFA908]/20 p-5 rounded-lg flex flex-col justify-between">
            <div className="flex justify-between items-end mb-2.5">
              <p className="text-zinc-300 text-left font-mono text-xs md:text-sm">
                &gt; MAINFRAME.X_COMMUNITY
              </p>
              <p className="text-purple-400 font-mono text-[11px] md:text-xs tracking-wide">[SYNCHRONIZED]</p>
            </div>
            
            <ProgressBar percent={100} aura={true} />
            
            <p className="text-zinc-400 font-mono text-[11px] md:text-xs mt-2.5 text-left">
              Core Integration Complete. {t("progress.members")}: {metrics.community}
            </p>
          </div>

        </div>

        {/* BOTONES DE CONVERSIÓN */}
        {!isLoading && (
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={() => window.open(pumpFunURL, "_blank")}
              className="px-10 py-3 rounded-md bg-amber-500 text-black font-bold hover:bg-amber-400 transition-all shadow-[0_0_25px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2.5 hover:scale-105"
            >
              <Rocket className="w-5 h-5" />
              {t("characters.buyOnPump")}
            </button>

            <button
              onClick={() => window.open(jupiterURL, "_blank")}
              className="px-10 py-3 rounded-md bg-[#1A1530] text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-black font-bold transition-all shadow-[0_0_20px_rgba(74,222,128,0.3)] flex items-center justify-center gap-2.5 hover:scale-105"
            >
              <ArrowRightLeft className="w-5 h-5" />
              {t("characters.buyOnJupiter")}
            </button>
          </div>
        )}

        {/* RITUAL MESSAGES */}
        {!isLoading && (
          <div className="mt-10 text-xs text-center text-zinc-500 italic animate-fadeIn animate-pulseSlow">
            {t("progress.renewalMessage")}
          </div>
        )}

      </div>
    </section>
  );
}