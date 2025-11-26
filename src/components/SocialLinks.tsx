import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Twitter, MessageCircle, Users, Share2, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMetrics } from '@/hooks/useMetrics';

export default function SocialLinks() {
  const { t } = useLanguage();
  const { metrics } = useMetrics();

  const socialPlatforms = [
    {
      name: t('progress.twitter'),
      handle: '@EligeTuMeme',
      followers: `${metrics.twitter} ${t('progress.followers')}`,
      url: 'https://x.com/EligeTuMeme',
      icon: Twitter,
      color: 'bg-blue-600 hover:bg-blue-700',
      description: t('social.followLatest'),
    },
    {
      name: t('progress.community'),
      handle: 'Solana Legends',
      followers: `${metrics.community} ${t('progress.members')}`,
      url: 'https://x.com/i/communities/1976865385971360174',
      icon: Users,
      color: 'bg-purple-600 hover:bg-purple-700',
      description: t('social.joinOurCommunity'),
    },
    {
      name: t('progress.telegram'),
      handle: t('progress.officialGroup'),
      followers: `${metrics.telegram} ${t('progress.members')}`,
      url: 'https://t.me/EligeTuMeme',
      icon: MessageCircle,
      color: 'bg-cyan-600 hover:bg-cyan-700',
      description: t('social.realTimeChat'),
    },
  ];

  const shareText =
    '🪐 ¡Descubre Solana Legends! Tres guardianes épicos compiten por convertirse en token. ¿Cuál elegirás? #SolanaLegends #Crypto #Meme';
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'telegram':
        url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
      default:
        break;
    }
    if (url) window.open(url, '_blank');
  };

  return (
    <section
      id="community"
      className="relative py-20 px-6 bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E] aura-pulsante aura-hover-gold"
    >
      {/* Aura cósmica detrás */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-[#FFA908]/20 animate-pulse pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('social.title')}</h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">{t('social.subtitle')}</p>
        </div>

        {/* Social Platforms */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {socialPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <Card
                key={platform.name}
                className="bg-[#1A1530]/40 border border-[#FFA908]/30 rounded-xl hover:shadow-[0_0_25px_#FFA908] hover:scale-105 transition-all duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 ${platform.color} rounded-full shadow-[0_0_15px_#FFA908]`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl">{platform.name}</CardTitle>
                  <CardDescription className="text-purple-300">{platform.handle}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-2xl font-bold text-yellow-300">{platform.followers}</div>
                  <p className="text-purple-200 text-sm">{platform.description}</p>
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    <Button
                      className={`w-full ${platform.color} text-white font-semibold aura-hover aura-pulsante shadow-[0_0_15px_#FFA908]`}
                    >
                      {t('social.follow')}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mensaje ritualizado centrado debajo de los tres bloques */}
        <div className="mb-12 text-sm text-center text-zinc-400 italic animate-fadeIn animate-pulseSlow">
          {t('progress.renewalMessage')}
        </div>

        {/* Share Section */}
        <Card className="bg-[#1A1530]/40 border border-[#FFA908]/30 rounded-xl mb-12 hover:shadow-[0_0_25px_#FFA908] transition-all duration-300">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-yellow-500 rounded-full shadow-[0_0_15px_#FFA908]">
                <Share2 className="h-8 w-8 text-[#0F0B1E]" />
              </div>
            </div>
            <CardTitle className="text-white text-2xl">{t('social.share')}</CardTitle>
            <CardDescription className="text-purple-300">{t('social.shareSubtitle')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleShare('twitter')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold aura-hover aura-pulsante shadow-[0_0_15px_#FFA908]"
              >
                <Twitter className="w-4 h-4 mr-2" />
                {t('social.shareX')}
              </Button>
              <Button
                onClick={() => handleShare('telegram')}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold aura-hover aura-pulsante shadow-[0_0_15px_#FFA908]"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {t('social.shareTelegram')}
              </Button>
              <Button
                onClick={() => handleShare('whatsapp')}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold aura-hover aura-pulsante shadow-[0_0_15px_#FFA908]"
              >
                <Heart className="w-4 h-4 mr-2" />
                {t('social.shareWhatsapp')}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-indigo-200 text-lg mb-6">{t('social.callToAction')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://x.com/EligeTuMeme" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-[#0F0B1E] font-semibold px-8 shadow-[0_0_15px_#FFA908] aura-hover aura-pulsante"
              >
                {t('social.followOnX')}
              </Button>
            </a>
            <a href="https://x.com/i/communities/1976865385971360174" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-[#0F0B1E] font-semibold px-8 shadow-[0_0_15px_#FFA908] aura-hover aura-pulsante"
              >
                {t('social.xCommunity')}
              </Button>
            </a>
            <a href="https://t.me/EligeTuMeme" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-[#0F0B1E] px-8 aura-hover aura-pulsante shadow-[0_0_15px_#FFA908]"
              >
                {t('social.joinTelegram')}
              </Button>
            </a>
          </div>
        </div>

        {/* Footer ritualizado */}
        <div className="mt-16 text-center text-xs text-zinc-500 px-4">
          Solana Legends 🪐 EligeTuMeme™ — © 2025<br />
          Official partners: <a href="https://Voltra.studio" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-400">votra.studio</a><br />
          Powered by community fire, ritualized progress, and cosmic guardianship.
        </div>
      </div>
    </section>
  );
}
