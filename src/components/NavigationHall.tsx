import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export default function NavigationHall() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="fixed top-4 left-4 md:top-6 md:left-8 z-[100]">
      <Button
        variant="outline"
        onClick={() => navigate("/hall-of-heroes")}
        className="
          bg-black/40 backdrop-blur-md
          border-2 border-orange-500/50
          hover:border-orange-400 hover:bg-orange-500/10
          text-orange-400 font-black px-4 py-2.5 rounded-xl
          text-sm uppercase tracking-widest transition-all duration-300
          flex items-center gap-2 shadow-[0_0_20px_rgba(251,146,60,0.2)]
        "
      >
        <span>🔥 {t("hero.hallOfHeroes").split("✨")[0]}</span>
      </Button>
    </div>
  );
}