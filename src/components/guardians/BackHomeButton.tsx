// components/guardians/BackHomeButton.tsx
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BackHomeButton() {
  const { t } = useLanguage();

  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg text-lg transition relative"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
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
