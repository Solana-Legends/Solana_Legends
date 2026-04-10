import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  // Función interna para alternar si toggleLanguage no existe en el context
  const handleToggle = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <Button
      variant="outline"
      onClick={handleToggle}
      className="
        bg-transparent 
        border-2 border-[#FFA908]/40 
        hover:border-[#FFA908] hover:bg-[#FFA908]/10 
        text-[#FFA908] font-black px-4 py-2.5 rounded-xl 
        text-sm uppercase tracking-widest transition-all duration-300
        flex items-center gap-2 shadow-lg backdrop-blur-sm
      "
    >
      <Globe className="w-4 h-4" />
      <span>{language === "en" ? "EN" : "ES"}</span>
    </Button>
  );
}