import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  // Función táctica para alternar el idioma
  const handleToggle = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <Button
      variant="outline"
      onClick={handleToggle}
      // TÁCTICO: Estética Ghost ZapSol, eliminada opacidad por defecto.
      // Aseguramos que el fondo se rellene en hover y el texto se mantenga legible.
      className="
        bg-transparent 
        border-2 border-[#FFA908]/50
        hover:border-[#FFA908] hover:bg-[#FFA908]
        text-[#FFA908] hover:text-[#0F0B1E]
        font-black px-4 py-2.5 rounded-full 
        text-sm uppercase tracking-widest transition-all duration-300
        flex items-center gap-2 shadow-lg backdrop-blur-sm
        z-50 relative group
      "
    >
      {/* Icono y texto siempre al 100% de opacidad */}
      <Globe className="w-4 h-4" />
      <span>{language === "en" ? "EN" : "ES"}</span>
    </Button>
  );
}