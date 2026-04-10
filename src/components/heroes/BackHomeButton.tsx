import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

interface BackHomeButtonProps {
  className?: string;
}

export default function BackHomeButton({
  className = "",
}: BackHomeButtonProps) {
  const { t } = useLanguage();
  const [exit, setExit] = useState(false);

  return (
    <Link
      to="/"
      onClick={() => setExit(true)}
      // TÁCTICO: Estética Ghost (border-2, bg-transparent) y w-full para adaptarse al contenedor
      className={`
        flex items-center justify-center gap-2 
        bg-transparent border-2 border-white/20 
        hover:border-[#FFA908] hover:bg-[#FFA908]/10 
        text-white font-bold px-4 py-2.5 rounded-xl 
        text-sm uppercase tracking-widest transition-all duration-300
        w-full shadow-lg backdrop-blur-sm
        ${exit ? "animate-slideOutLeftGlow" : "animate-slideInLeftGlow"} 
        ${className}
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      {t("common.backHome")}
    </Link>
  );
}