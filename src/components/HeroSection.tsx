import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Rocket, Users, Vote, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import VideoWithControls from '@/components/VideoWithControls';

export default function HeroSection() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E] overflow-hidden">
      {/* Fondo cósmico animado */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-indigo-400 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo con aura dorada */}
        <div className="mb-8 flex justify-center relative">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
            <div className="w-48 h-48 rounded-full blur-3xl aura-pulsante-gold-strong"></div>
          </div>
          <img
            src="/assets/LogoPremium1.png"
            alt="Solana Legends Logo"
            className="h-24 w-auto md:h-32 object-contain animate-in fade-in slide-in-from-top duration-1000 
            mix-blend-overlay opacity-90 logo-respirando relative z-10"
          />
        </div>

        {/* Videos + Imagen Voltra */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto items-center">
          {/* Video izquierdo */}
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <div className="relative group rounded-xl overflow-hidden transition-shadow duration-300 hover:scale-[1.02] border border-purple-500/40 aura-pulsante aura-hover">
              <VideoWithControls src="/assets/HeroesLevitan.mp4" glowColor="#A020F0" />
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          {/* Video derecho */}
          <div className="animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative group rounded-xl overflow-hidden transition-shadow duration-300 hover:scale-[1.02] border border-blue-400/40 aura-pulsante-blue aura-hover-gold">
              <VideoWithControls src="/assets/HéroesProgramandoEn.mp4" glowColor="#00BFFF" />
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          {/* Imagen Voltra con los mismos efectos que LogoPremium1 */}
          <div className="hidden md:flex justify-center relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
              <div className="w-48 h-48 rounded-full blur-3xl aura-pulsante-gold-strong"></div>
            </div>
            <img
              src="/assets/Voltra.png"
              alt="Voltra Studio Logo"
              className="h-24 w-auto md:h-32 object-contain mix-blend-overlay opacity-90 logo-respirando relative z-10"
            />
          </div>
        </div>

        {/* Títulos */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-indigo-200 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000">
          {t('hero.subtitle')}
        </p>
        <p className="text-lg md:text-xl text-purple-300 mb-12 font-medium animate-in fade-in slide-in-from-bottom duration-1000">
          {t('hero.tagline')}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <Badge variant="outline" className="text-green-400 border-green-400 bg-green-400/10 px-4 py-2 hover:shadow-[0_0_20px_#00FF00] transition-all duration-300">
            <Rocket className="w-4 h-4 mr-2" />
            {t('hero.activeProject')}
          </Badge>
          <Badge variant="outline" className="text-blue-300 border-blue-300 bg-blue-300/10 px-4 py-2 hover:shadow-[0_0_20px_#00BFFF] transition-all duration-300">
            <Users className="w-4 h-4 mr-2" />
            {t('hero.growingCommunity')}
          </Badge>
          <Badge variant="outline" className="text-purple-300 border-purple-300 bg-purple-300/10 px-4 py-2 hover:shadow-[0_0_20px_#A020F0] transition-all duration-300">
            <Vote className="w-4 h-4 mr-2" />
            {t('hero.upcomingVote')}
          </Badge>
        </div>

        {/* Botones ritualizados */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-1000">
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/guardians')}
            className="border-[#FFA908] text-[#FFA908] hover:bg-[#FFA908] hover:text-[#0F0B1E] px-8 py-4 text-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_30px_#FFA908]"
          >
            <Shield className="w-5 h-5" />
            {t('hero.viewGuardians')}
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const section = document.getElementById('community');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-[#0F0B1E] px-8 py-4 text-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_30px_#4B0082]"
          >
            <Users className="w-5 h-5" />
            {t('hero.joinCommunity')}
          </Button>

          {/* Nuevo botón Voltra.Studio */}
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open('https://voltra.studio', '_blank')}
            className="flex flex-col items-center justify-center text-center border-[#FFA908] text-[#FFA908] hover:bg-[#FFA908] hover:text-[#0F0B1E] px-8 py-5 font-semibold transition-all duration-300 hover:shadow-[0_0_30px_#FFA908] leading-tight gap-1"
          >
            <span className="text-[1.15rem] font-bold tracking-wide translate-y-[2px]">Voltra.Studio</span>
            <span className="text-sm text-[#FFD966] font-medium -translate-y-[2px]">Official partners:</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
