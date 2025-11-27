import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={toggleLanguage}
        className="bg-yellow-500 hover:bg-yellow-600 text-orange-900 font-semibold"
        size="sm"
      >
        <Globe className="w-4 h-4 mr-2" />
        {language === 'es' ? 'EN' : 'ES'}
      </Button>
    </div>
  );
}
