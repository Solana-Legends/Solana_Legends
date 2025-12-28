import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cva } from 'class-variance-authority';

// cva: solo clases CSS
const switcher = cva("font-semibold transition-colors", {
  variants: {
    language: {
      es: "bg-yellow-500 hover:bg-yellow-600 text-orange-900",
      en: "bg-blue-500 hover:bg-blue-600 text-white",
    },
    size: {
      sm: "px-2 py-1 text-sm",
      lg: "px-4 py-2 text-lg",
    },
  },
  defaultVariants: {
    language: "en",
    size: "sm",
  },
});

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={toggleLanguage}
        className={switcher({ language })}
        size="sm"
      >
        <Globe className="w-4 h-4 mr-2" />
        {language === "es" ? "EN" : "ES"}
      </Button>
    </div>
  );
}
