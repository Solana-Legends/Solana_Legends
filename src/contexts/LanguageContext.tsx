import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Hero Section
    'hero.title': 'Solana Legends 🪐 Elige Tu Meme',
    'hero.subtitle': 'Únete a nuestra comunidad y elige el guardián que se convertirá en token.',
    'hero.tagline': 'Tres fuerzas elementales. Una comunidad. Un destino.',
    'hero.viewGuardians': 'Ver Guardianes',
    'hero.joinCommunity': 'Únete a la Comunidad',
    'hero.activeProject': 'Proyecto Activo',
    'hero.growingCommunity': 'Comunidad Creciendo',
    'hero.upcomingVote': 'Votación Próxima',
  
    // Characters
    'characters.title': 'Los Guardianes',
    'characters.subtitle': 'Conoce a los tres legendarios guardianes que compiten por convertirse en el token oficial de Solana Legends',
    'characters.zapsol.name': 'ZapSol',
    'characters.zapsol.title': 'El Guardián del Rayo',
    'characters.zapsol.description': 'Maestro de la energía eléctrica y la velocidad. ZapSol controla rayos cósmicos y viaja a la velocidad de la luz. Su poder radica en la capacidad de generar tormentas eléctricas y manipular la energía pura del universo.',
    'characters.zapsol.element': 'Energía',
    'characters.monkesol.name': 'MonkeSol',
    'characters.monkesol.title': 'El Sabio Ancestral',
    'characters.monkesol.description': 'Guardián de la sabiduría antigua y los secretos del blockchain. MonkeSol posee conocimientos milenarios sobre las criptomonedas y puede predecir los movimientos del mercado con precisión sobrenatural.',
    'characters.monkesol.element': 'Sabiduría',
    'characters.chipisol.name': 'ChipiSol',
    'characters.chipisol.title': 'El Espíritu Cósmico',
    'characters.chipisol.description': 'Entidad mística que conecta todas las dimensiones del metaverso. ChipiSol puede manipular la realidad digital y crear portales entre diferentes blockchains, siendo el puente entre mundos virtuales.',
    'characters.chipisol.element': 'Cosmos',
    'characters.stats': 'Estadísticas',
    'characters.power': 'Poder',
    'characters.speed': 'Velocidad',
    'characters.intelligence': 'Inteligencia',
    'characters.voteFor': 'Votar por',
    'characters.votingLocked': 'Votación bloqueada',
    'characters.question': '¿Cuál será el guardián elegido por la comunidad?',
    'characters.votingUnlocked': 'Votación desbloqueada en',
    'characters.followersMore': 'seguidores más',
    'characters.viewResults': 'Ver Resultados de Votación',
    'characters.votingActive': '¡La votación está activa! ¿Cuál será el guardián elegido por la comunidad?',
    'characters.chosenGuardian': 'El guardián elegido por la comunidad es',
    'characters.telegramNote': '🕰️ Cada amanecer y cada ocaso, las cifras se renuevan para reflejar la energía viva del fuego colectivo',
  
    // Progress (fusionado)
    'progress.title': 'Progreso de la Comunidad',
    'progress.subtitle': 'Seguimos el fuego colectivo en cada guardián',
    'progress.mainProgress': 'Progreso Principal (X/Twitter)',
    'progress.followers': 'seguidores',
    'progress.towardsVoting': 'Progreso hacia la votación',
    'progress.missing': '¡Faltan',
    'progress.forVoting': 'seguidores para la votación!',
    'progress.twitter': 'Twitter/X',
    'progress.community': 'Comunidad X',
    'progress.telegram': 'Telegram',
    'progress.members': 'miembros',
    'progress.follow': 'Seguir en X',
    'progress.joinCommunity': 'Unirse a Comunidad',
    'progress.joinTelegram': 'Unirse a Telegram',
    'progress.officialGroup': 'Grupo oficial',
    'progress.voteMessage': '🗳️ Una vez que alcancemos 500 seguidores en X, ¡comenzará la votación para elegir el guardián ganador!',
    'progress.ritualSoon': 'El fuego se activará pronto',
    'progress.voteMessageRitual': 'La votación ritual está activa, participa en el destino de Solana Legends',
    'progress.fireUnleashed': '¡El fuego se ha desatado!',
    'progress.voteButton': 'Votar por el Guardián',
    'progress.proposeLegend': 'Proponer una Leyenda',
    'progress.topSource': 'La red que lidera el fuego es',
    'progress.goalReached': '¡Meta alcanzada! El fuego ritual está encendido.',
    'progress.telegramNote': '🕰️ Cada amanecer y cada ocaso, las cifras se renuevan para reflejar la energía viva del fuego colectivo',
  
    // Project Info
    'project.title': 'El Proyecto',
    'project.subtitle': 'Solana Legends es más que un token - es una comunidad que decide el futuro de sus guardianes',
    'project.whitepaper': 'White Paper',
    'project.whitepaperDesc': 'Documentación completa',
    'project.whitepaperText': 'Descubre la narrativa completa, la tokenomics, y el roadmap detallado de Solana Legends. Conoce cómo funciona el sistema de votación y el futuro de nuestros guardianes.',
    'project.readWhitepaper': 'Leer White Paper',
    'project.features': 'Características Principales',
    'project.feature1': 'Votación comunitaria descentralizada',
    'project.feature2': 'Blockchain Solana seguro y rápido',
    'project.feature3': 'Token del guardián ganador',
    'project.feature4': 'Comunidad activa y participativa',
    'project.feature5': 'Roadmap transparente y definido',
    'project.stat1': 'Guardianes Legendarios',
    'project.stat2': 'Meta de Seguidores',
    'project.stat3': 'Token Ganador',
    'project.stat4': 'Posibilidades',
  
    // 🔮 Subtítulos ritualizados
    'project.stat1Aura': '⚡ Energía ancestral',
    'project.stat2Aura': '🔥 Fuego comunitario',
    'project.stat3Aura': '❄️ Token revelado',
    'project.stat4Aura': '🪐 Posibilidades infinitas',
  
    // Social Links
    'social.title': 'Conexiones Sociales',
    'social.subtitle': 'Únete a nuestras plataformas y comparte la energía',
    'social.followLatest': 'Sigue nuestras últimas noticias',
    'social.joinOurCommunity': 'Únete a nuestra comunidad',
    'social.realTimeChat': 'Charla en tiempo real',
    'social.follow': 'Seguir',
    'social.share': 'Comparte la leyenda',
    'social.shareSubtitle': 'Difunde el fuego colectivo en tus redes',
    'social.shareX': 'Compartir en X/Twitter',
    'social.shareTelegram': 'Compartir en Telegram',
    'social.shareWhatsapp': 'Compartir en WhatsApp',
    'social.callToAction': 'Sé parte del ritual y acompaña a los guardianes',
    'social.followOnX': 'Seguir en X/Twitter',
    'social.xCommunity': 'Unirse a la Comunidad X',
    'social.joinTelegram': 'Unirse al Telegram oficial',
    'social.telegramNote': '🕰️ Cada amanecer y cada ocaso, las cifras se renuevan para reflejar la energía viva del fuego colectivo',
  },  

  en: {
    // Hero Section
    'hero.title': 'Solana Legends 🪐 Choose Your Meme',
    'hero.subtitle': 'Join our community and choose the guardian that will become a token.',
    'hero.tagline': 'Three elemental forces. One community. One destiny.',
    'hero.viewGuardians': 'View Guardians',
    'hero.joinCommunity': 'Join the Community',
    'hero.activeProject': 'Active Project',
    'hero.growingCommunity': 'Growing Community',
    'hero.upcomingVote': 'Upcoming Vote',
  
    // Characters
    'characters.title': 'The Guardians',
    'characters.subtitle': 'Meet the three legendary guardians competing to become the official Solana Legends token',
    'characters.zapsol.name': 'ZapSol',
    'characters.zapsol.title': 'The Lightning Guardian',
    'characters.zapsol.description': 'Master of electrical energy and speed. ZapSol controls cosmic lightning and can travel at the speed of light. His power lies in the ability to generate electrical storms and manipulate the pure energy of the universe.',
    'characters.zapsol.element': 'Energy',
    'characters.monkesol.name': 'MonkeSol',
    'characters.monkesol.title': 'The Ancient Sage',
    'characters.monkesol.description': 'Guardian of ancient wisdom and blockchain secrets. MonkeSol possesses millennial knowledge about cryptocurrencies and can predict market movements with supernatural precision.',
    'characters.monkesol.element': 'Wisdom',
    'characters.chipisol.name': 'ChipiSol',
    'characters.chipisol.title': 'The Cosmic Spirit',
    'characters.chipisol.description': 'Mystical entity that connects all dimensions of the metaverse. ChipiSol can manipulate digital reality and create portals between different blockchains, being the bridge between virtual worlds.',
    'characters.chipisol.element': 'Cosmos',
    'characters.stats': 'Stats',
    'characters.power': 'Power',
    'characters.speed': 'Speed',
    'characters.intelligence': 'Intelligence',
    'characters.voteFor': 'Vote for',
    'characters.votingLocked': 'Voting Locked',
    'characters.question': 'Which guardian will be chosen by the community?',
    'characters.votingUnlocked': 'Voting unlocked in',
    'characters.followersMore': 'more followers',
    'characters.viewResults': 'View Voting Results',
    'characters.votingActive': 'Voting is active! Which guardian will be chosen by the community?',
    'characters.chosenGuardian': 'The guardian chosen by the community is',
    'characters.telegramNote': '🕰️ At every dawn and dusk, the numbers renew to reflect the living energy of the collective fire',
  
    // Progress (fusionado)
    'progress.title': 'Community Progress',
    'progress.subtitle': 'Tracking the collective fire in each guardian',
    'progress.mainProgress': 'Main Progress (X/Twitter)',
    'progress.followers': 'followers',
    'progress.towardsVoting': 'Progress towards voting',
    'progress.missing': 'Only',
    'progress.forVoting': 'followers left for voting!',
    'progress.twitter': 'Twitter/X',
    'progress.community': 'X Community',
    'progress.telegram': 'Telegram',
    'progress.members': 'members',
    'progress.follow': 'Follow on X',
    'progress.joinCommunity': 'Join Community',
    'progress.joinTelegram': 'Join Telegram',
    'progress.officialGroup': 'Official group',
    'progress.voteMessage': '🗳️ Once we reach 500 followers on X, voting will begin to choose the winning guardian!',
    'progress.ritualSoon': 'The fire will ignite soon',
    'progress.voteMessageRitual': 'The ritual vote is active, take part in Solana Legends destiny',
    'progress.fireUnleashed': 'The fire has been unleashed!',
    'progress.voteButton': 'Vote for the Guardian',
    'progress.proposeLegend': 'Propose a Legend',
    'progress.topSource': 'The network leading the fire is',
    'progress.goalReached': 'Goal reached! The ritual fire is lit.',
    'progress.telegramNote': '🕰️ At every dawn and dusk, the numbers renew to reflect the living energy of the collective fire',
  
    // Project Info
    'project.title': 'The Project',
    'project.subtitle': 'Solana Legends is more than a token - it\'s a community that decides the future of its guardians',
    'project.whitepaper': 'White Paper',
    'project.whitepaperDesc': 'Complete documentation',
    'project.whitepaperText': 'Discover the complete narrative, tokenomics, and detailed roadmap of Solana Legends. Learn how the voting system works and the future of our guardians.',
    'project.readWhitepaper': 'Read White Paper',
    'project.features': 'Key Features',
    'project.feature1': 'Decentralized community voting',
    'project.feature2': 'Secure and fast Solana blockchain',
    'project.feature3': 'Winning guardian token',
    'project.feature4': 'Active and participatory community',
    'project.feature5': 'Transparent and defined roadmap',
    'project.stat1': 'Legendary Guardians',
    'project.stat2': 'Follower Goal',
    'project.stat3': 'Winning Token',
    'project.stat4': 'Possibilities',
  
    // 🔮 Ritual subtitles
    'project.stat1Aura': '⚡ Ancestral energy',
    'project.stat2Aura': '🔥 Community fire',
    'project.stat3Aura': '❄️ Token revealed',
    'project.stat4Aura': '🪐 Infinite possibilities',
  
    // Social Links
    'social.title': 'Social Connections',
    'social.subtitle': 'Join our platforms and share the energy',
    'social.followLatest': 'Follow our latest updates',
    'social.joinOurCommunity': 'Join our community',
    'social.realTimeChat': 'Real-time chat',
    'social.follow': 'Follow',
    'social.share': 'Share the legend',
    'social.shareSubtitle': 'Spread the collective fire across your networks',
    'social.shareX': 'Share on X/Twitter',
    'social.shareTelegram': 'Share on Telegram',
    'social.shareWhatsapp': 'Share on WhatsApp',
    'social.callToAction': 'Be part of the ritual and walk with the guardians',
    'social.followOnX': 'Follow on X/Twitter',
    'social.xCommunity': 'Join the X Community',
    'social.joinTelegram': 'Join the official Telegram',
    'social.telegramNote': '🕰️ At every dawn and dusk, the numbers renew to reflect the living energy of the collective fire',
  },
  
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
