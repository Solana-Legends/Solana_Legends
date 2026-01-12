import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface GuardiansBreadcrumbProps {
  className?: string;
}

export default function GuardiansBreadcrumb({
  className = "",
}: GuardiansBreadcrumbProps) {
  const { t } = useLanguage();

  return (
    <nav
      className={`
        flex items-center gap-2 px-1 md:px-0 
        opacity-0 translate-y-3 animate-fadeInUp 
        [animation-delay:200ms]
        ${className}
      `}
    >
      <Link
        to="/"
        className="hover:text-blue-200 transition font-medium hover:shadow-[0_0_12px_#3B82F6] rounded px-1"
      >
        {t("common.home")}
      </Link>

      <span className="text-gray-400">›</span>

      <span className="text-purple-300 font-semibold tracking-wide hover:shadow-[0_0_12px_#A020F0] rounded px-1 transition">
        {t("hero.hallOfHeroes")}
      </span>
    </nav>
  );
}
