import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NavigationHall() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-4 left-4 md:top-6 md:left-8 z-[100]">
      <Button
        variant="outline"
        onClick={() => navigate("/hall-of-heroes")}
        className="
          bg-black/40 backdrop-blur-md
          border-2 border-orange-500/50
          hover:border-orange-400 hover:bg-orange-500
          text-orange-400 hover:text-[#0F0B1E]
          font-black px-4 py-2.5 rounded-xl
          text-sm tracking-widest transition-all duration-300
          flex items-center gap-2 shadow-[0_0_20px_rgba(251,146,60,0.2)]
        "
      >
        <span>🔥 Hall of Heroes</span>
      </Button>
    </div>
  );
}