import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const handleToggle = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <div className="fixed top-4 right-4 md:top-6 md:right-8 z-[100]">
      <Button
        variant="outline"
        onClick={handleToggle}
        className="
          bg-black/40 backdrop-blur-md
          border-2 border-[#FFA908]/50
          hover:border-[#FFA908] hover:bg-[#FFA908]
          text-[#FFA908] hover:text-[#0F0B1E]
          font-black px-4 py-2.5 rounded-xl 
          text-sm uppercase tracking-widest transition-all duration-300
          flex items-center gap-2 shadow-[0_0_20px_rgba(255,169,8,0.2)]
        "
      >
        <Globe className="w-4 h-4" />
        {/* Muestra ES si estás en EN, y viceversa */}
        <span>{language === "en" ? "ES" : "EN"}</span>
      </Button>
    </div>
  );
}