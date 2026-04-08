import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
}

/**
 * 🔹 Definimos primero los bloques independientes
 */
const enTranslations = {
  // Hero Section (ACTUALIZADO A FASE DE IGNICIÓN)
  "hero.title": "Solana🪐Legends, ZapSol⚡Activated",
  "hero.subtitle":
    "The community has spoken. ZapSol⚡ is the chosen Hero Token. The circuit is live: anchor your position and join the Legend.",
  "hero.tagline": "Three elemental architectures. One network. One destiny.",
  "hero.hallOfHeroes": "Hall of Heroes ✨ Blueprint Archive",
  "hero.joinCommunity": "Join the Network",
  "hero.$Poco": "Official Bot",
  "hero.activeProject": "Active Protocol",
  "hero.growingCommunity": "Expanding Network",
  "hero.upcomingVote": "Network Ignition Live",

  // Characters (PURGADO DE "VOTACIONES" Y "CANDADOS")
  "characters.title": "The Hero💫Nodes",
  "characters.subtitle":
    "Three elemental architectures. One unified destiny.",

  "characters.zapsol.name": "ZapSol",
  "characters.zapsol.title": "Lightning Hero⚡Token",
  "characters.zapsol.description":
    "A high‑frequency conduit engineered to channel plasma‑grade lightning across the metaverse lattice. ZapSol stabilizes energetic flows, accelerates network pulses, and ignites precise activation thresholds.",
  "characters.zapsol.element": "Energy",

  "characters.monkesol.name": "MonkeSol",
  "characters.monkesol.title": "Fire Hero🔥Supporting",
  "characters.monkesol.description":
    "A millennial archive‑construct containing encrypted ancestral knowledge. MonkeSol decodes market patterns, preserves ritual memory, and safeguards the deep logic of the blockchain continuum.",
  "characters.monkesol.element": "Wisdom",

  "characters.chipisol.name": "ChipiSol",
  "characters.chipisol.title": "Ice Hero❄️Supporting",
  "characters.chipisol.description":
    "A dimensional gateway‑entity capable of opening stable portals between chains and realities. ChipiSol weaves crystalline pathways, synchronizes multiversal data, and maintains the integrity of inter‑realm transit.",
  "characters.chipisol.element": "Cosmos",

  "characters.stats": "Specifications",
  "characters.power": "Output",
  "characters.speed": "Throughput",
  "characters.intelligence": "Cognitive Layer",
  "characters.voteFor": "Trade $ZAPSOL",
  "characters.buyOnPump": "Buy on pump.fun",
  "characters.buyOnJupiter": "Buy on Jupiter",
  "characters.votingLocked": "Status: Standby",
  "characters.question": "The Community has elevated its Guardian.",
  "characters.votingUnlocked": "Activation unlocked in",
  "characters.followersMore": "more Legends",
  "characters.viewResults": "View Live Chart",
  "characters.votingActive":
    "ZapSol⚡Protocol Ignited. The network is operating at maximum capacity.",
  "characters.chosenGuardian": "The Hero💫Node chosen by the network is",
  "characters.telegramNote":
    "🕰️ At every dawn and dusk, the metrics renew to reflect the living pulse of the collective fire",

  // Progress
  "progress.title": "Network Progress",
  "progress.subtitle": "Tracking the ignition of each Hero💫Node",
  "progress.mainProgressLabel": "Primary Activation ({source})",
  "progress.remainingFollowers":
    "{remaining} Legends left until activation. ⚡ The ignition sequence is near.",
  "progress.fireActivated":
    "✨ {source} has ignited the ritual fire. Activation is now live.",
  "progress.twitterLabel": "Twitter/X 👉🏽 {current} / {goal} Legends",
  "progress.telegramLabel": "Telegram 👉🏽 {current} / {goal} Legends",
  "progress.communityLabel": "X Community 👉🏽 {current} / {goal} Legends",
  "progress.followers": "Legends",
  "progress.towardsVoting": "Progress toward activation",
  "progress.missing": "Only",
  "progress.forVoting": "Legends left for activation",
  "progress.twitter": "Twitter/X",
  "progress.community": "X Community",
  "progress.telegram": "Telegram",
  "progress.members": "Legends",
  "progress.follow": "Follow on X",
  "progress.joinCommunity": "Join Network",
  "progress.joinTelegram": "Join Telegram",
  "progress.officialGroup": "Official Group",
  "progress.voteMessage":
    "🗳️ Once we reach 500 Legends on X, the activation ritual will begin.",
  "progress.ritualSoon": "Ignition sequence approaching ❄️",
  "progress.voteMessageRitual":
    "The activation ritual is live. Shape the destiny of Solana Legends.",
  "progress.fireUnleashed": "The fire has been unleashed.",
  "progress.voteButton": "Support the Hero💫Node",
  "progress.proposeLegend": "Propose a Legend",
  "progress.topSource": "The network leading the ignition is",
  "progress.goalReached": "Threshold reached. The ritual fire is lit.",
  "progress.telegramNote":
    "🕰️ At every dawn and dusk, the metrics renew to reflect the living pulse of the collective fire",
  "progress.renewalMessage":
    "🕰️ At every dawn and dusk, the metrics renew to reflect the living pulse of the collective fire",
  "progress.coreStatus": " Network Core Status",
  "progress.architectureOnline": " ZapSol⚡Architecture Online",
  "progress.systemCapacity": "🔋 System Capacity",
  "progress.maximum": " 100% MAXIMUM ",
  "progress.protocolActive": "🔥 Ignition Sequence Complete. Protocol Active.",

  // Project Info
  "project.title": "The Protocol",
  "project.subtitle":
    "Solana Legends is more than a token, it is a network that determines the future of its Hero💫Nodes.",
  "project.whitepaper": "White Paper",
  "project.whitepaperDesc": "Complete Documentation",
  "project.whitepaperText":
    "Explore the full narrative, token architecture, and roadmap of Solana Legends. Understand how activation works and how the Hero💫Nodes evolve.",
  "project.readWhitepaper": "Read White Paper",
  "project.features": "Core Features",
  "project.feature1": "Decentralized network activation",
  "project.feature2": "Fast and secure Solana blockchain",
  "project.feature3": "Winning Hero💫Node token",
  "project.feature4": "Active and participatory network",
  "project.feature5": "Transparent and structured roadmap",
  "project.stat1": "Legendary Hero💫Nodes",
  "project.stat2": "Activation Threshold",
  "project.stat3": "Winning Token",
  "project.stat4": "Possibilities",

  // Ritual subtitles
  "project.stat1Aura": "⚡ High‑frequency energy",
  "project.stat2Aura": "🔥 Collective fire",
  "project.stat3Aura": "❄️ Token revealed",
  "project.stat4Aura": "🪐 Infinite architectures",

  // Social
  "social.title": "Network Links",
  "social.subtitle": "Join the platforms and amplify the signal",
  "social.followLatest": "Follow the latest transmissions",
  "social.joinOurCommunity": "Join the network",
  "social.realTimeChat": "Real‑time channel",
  "social.follow": "Follow",
  "social.share": "Share the Legend",
  "social.shareSubtitle": "Extend the collective fire across the network",
  "social.shareX": "Share on X/Twitter",
  "social.shareTelegram": "Share on Telegram",
  "social.shareWhatsapp": "Share on WhatsApp",
  "social.callToAction": "Join the ritual and walk with the Hero💫Nodes",
  "social.followOnX": "Follow on X/Twitter",
  "social.xCommunity": "Join the X Community",
  "social.joinTelegram": "Join the official Telegram",
  "social.telegramNote":
    "🕰️ At every dawn and dusk, the metrics renew to reflect the living pulse of the collective fire",

  // Common
  "common.home": "Home",
  "common.backHome": "Back to Home",

  // Timeline
  "timeline.title": "Evolution of the Hero💫Nodes",

  "timeline.monkesol.title": "MonkeSol emerges as an Ancient Hero💫Archive 🔥",
  "timeline.monkesol.description":
    "A construct of encrypted memory descends, carrying millennial data and stabilizing the wisdom layer of the network.",

  "timeline.zapsol.title": "ZapSol activates as a Lightning Hero💫Node ⚡",
  "timeline.zapsol.description":
    "A thunderous pulse ignites the grid, accelerating the network with plasma‑grade energy.",

  "timeline.chipisol.title":
    "ChipiSol reveals itself as a Cosmic Hero💫Gateway ❄️",
  "timeline.chipisol.description":
    "A crystalline aperture opens, linking dimensions and synchronizing multiversal pathways.",

  "timeline.union.title": "The convergence of the three architectures ⚡🔥❄️",
  "timeline.union.description":
    "ZapSol, MonkeSol and ChipiSol synchronize their auras, forming the tri‑layered foundation of the Solana Legends protocol.",
  "timeline.closure":
    "Thus emerged the first triad of Hero💫Nodes, united in a new cosmic architecture.",

  // Gallery
  "gallery.title": "Hall of Heroes ✨ Blueprint Archive",
  "gallery.subtitle":
    "Explore the ritualized chambers of ZapSol ⚡, MonkeSol 🔥 and ChipiSol ❄️",
  "gallery.footer":
    "At every dawn and dusk, the fire renews with the network’s energy",

  // Individual hero pages
  "chipisol.title": "❄️ ChipiSol",
  "chipisol.subtitle":
    "Cosmic Hero💫Gateway ❄️ a dimensional entity linking realms and blockchains.",
  "chipisol.quote":
    "Crystalline gateways preserve the memory of the universe and open routes to the eternal.",

  "monkesol.title": "🔥 MonkeSol",
  "monkesol.subtitle":
    "Ancient Hero💫Archive 🔥 a construct of encrypted ancestral wisdom.",
  "monkesol.quote":
    "Controlled fire illuminates the path of knowledge and stabilizes the network’s memory.",

  "zapsol.title": "⚡ ZapSol",
  "zapsol.subtitle":
    "Lightning Hero💫Node ⚡ a conduit of high‑frequency energy and speed.",
  "zapsol.quote":
    "Lightning reveals the path of clarity and awakens the pulse of the network.",
} as const;

// 🔹 Tipo de claves de traducción generado automáticamente
export type TranslationKeys =
  | keyof typeof enTranslations
  | `characters.${string}`;

// Bloque español
const esTranslations = {
  // Hero Section (ACTUALIZADO A FASE DE IGNICIÓN)
  "hero.title": "Solana🪐Legends, ZapSol⚡Activado",
  "hero.subtitle":
    "La comunidad ha hablado. ZapSol⚡ es el Hero Token elegido. El circuito está activo: asegura tu posición y únete a la Leyenda.",
  "hero.tagline": "Tres arquitecturas elementales. Una red. Un destino.",
  "hero.hallOfHeroes": "Salón de Héroes ✨ Archivo Blueprint",
  "hero.joinCommunity": "Unirse a la Red",
  "hero.$Poco": "Bot Oficial",
  "hero.activeProject": "Protocolo Activo",
  "hero.growingCommunity": "Red en Expansión",
  "hero.upcomingVote": "Ignición de Red Activa",

  // Characters (PURGADO DE "VOTACIONES" Y "CANDADOS")
  "characters.title": "Los Hero💫Nodes",
  "characters.subtitle":
    "Tres arquitecturas elementales. Un único destino.",

  "characters.zapsol.name": "ZapSol",
  "characters.zapsol.title": "Relampago Hero⚡Token",
  "characters.zapsol.description":
    "Un conducto de alta frecuencia diseñado para canalizar energía de plasma a través del entramado del metaverso. ZapSol estabiliza flujos energéticos, acelera pulsos de red y enciende umbrales de activación precisos.",
  "characters.zapsol.element": "Energía",

  "characters.monkesol.name": "MonkeSol",
  "characters.monkesol.title": "Fuego Hero🔥Apoyando",
  "characters.monkesol.description":
    "Un archivo‑constructo milenario que contiene conocimiento ancestral cifrado. MonkeSol decodifica patrones del mercado, preserva memoria ritual y protege la lógica profunda del continuo blockchain.",
  "characters.monkesol.element": "Sabiduría",

  "characters.chipisol.name": "ChipiSol",
  "characters.chipisol.title": "Hielo Hero❄️Apoyando",
  "characters.chipisol.description":
    "Una entidad‑portal dimensional capaz de abrir rutas estables entre cadenas y realidades. ChipiSol teje caminos cristalinos, sincroniza datos multiversales y mantiene la integridad del tránsito inter‑realidad.",
  "characters.chipisol.element": "Cosmos",

  "characters.stats": "Especificaciones",
  "characters.power": "Potencia",
  "characters.speed": "Rendimiento",
  "characters.intelligence": "Capa Cognitiva",
  "characters.voteFor": "Comprar $ZAPSOL",
  "characters.buyOnPump": "Comprar en pump.fun",
  "characters.buyOnJupiter": "Comprar en Jupiter",
  "characters.votingLocked": "Estado: En espera",
  "characters.question": "La Comunidad ha elevado a su Guardián.",
  "characters.votingUnlocked": "Activación desbloqueada en",
  "characters.followersMore": "Leyendas más",
  "characters.viewResults": "Ver Gráfico en Vivo",
  "characters.votingActive":
    "Protocolo ZapSol⚡en Ignición. La red opera a máxima capacidad.",
  "characters.chosenGuardian": "El Hero💫Node elegido por la red es",
  "characters.telegramNote":
    "🕰️ Cada amanecer y cada ocaso, las métricas se renuevan para reflejar el pulso vivo del fuego colectivo",

  // Progress
  "progress.title": "Progreso de la Red",
  "progress.subtitle": "Seguimiento de la ignición de cada Hero💫Node",
  "progress.mainProgressLabel": "Activación Principal ({source})",
  "progress.remainingFollowers":
    "Faltan {remaining} Leyendas para la activación. ⚡ La secuencia de ignición está cerca.",
  "progress.fireActivated":
    "✨ {source} ha encendido el fuego ritual. La activación está en curso.",
  "progress.twitterLabel": "Twitter/X 👉🏽 {current} / {goal} Leyendas",
  "progress.telegramLabel": "Telegram 👉🏽 {current} / {goal} Leyendas",
  "progress.communityLabel": "Comunidad X 👉🏽 {current} / {goal} Leyendas",
  "progress.followers": "Leyendas",
  "progress.towardsVoting": "Progreso hacia la activación",
  "progress.missing": "Solo",
  "progress.forVoting": "Leyendas para la activación",
  "progress.twitter": "Twitter/X",
  "progress.community": "Comunidad X",
  "progress.telegram": "Telegram",
  "progress.members": "Leyendas",
  "progress.follow": "Seguir en X",
  "progress.joinCommunity": "Unirse a la Red",
  "progress.joinTelegram": "Unirse a Telegram",
  "progress.officialGroup": "Grupo Oficial",
  "progress.voteMessage":
    "🗳️ Al alcanzar 500 Leyendas en X, comenzará el ritual de activación.",
  "progress.ritualSoon": "Secuencia de ignición próxima ❄️",
  "progress.voteMessageRitual":
    "El ritual de activación está en curso. Participa en el destino de Solana Legends.",
  "progress.fireUnleashed": "El fuego ha sido desatado.",
  "progress.voteButton": "Apoyar al Hero💫Node",
  "progress.proposeLegend": "Proponer una Leyenda",
  "progress.topSource": "La red que lidera la ignición es",
  "progress.goalReached": "Umbral alcanzado. El fuego ritual está encendido.",
  "progress.telegramNote":
    "🕰️ Cada amanecer y cada ocaso, las métricas se renuevan para reflejar el pulso vivo del fuego colectivo",
  "progress.renewalMessage":
    "🕰️ Cada amanecer y cada ocaso, las métricas se renuevan para reflejar el pulso vivo del fuego colectivo",
  "progress.coreStatus": " Estado del Núcleo",
  "progress.architectureOnline": " Arquitectura ZapSol⚡en Línea",
  "progress.systemCapacity": "🔋 Capacidad del Sistema",
  "progress.maximum": " 100% MÁXIMO ",
  "progress.protocolActive": "🔥 Secuencia de Ignición Completa. Protocolo Activo.",

  // Project Info
  "project.title": "El Protocolo",
  "project.subtitle":
    "Solana Legends es más que un token, es una red que decide el futuro de sus Hero💫Nodes.",
  "project.whitepaper": "White Paper",
  "project.whitepaperDesc": "Documentación Completa",
  "project.whitepaperText":
    "Explora la narrativa, la arquitectura del token y el roadmap de Solana Legends. Comprende cómo funciona la activación y cómo evolucionan los Hero💫Nodes.",
  "project.readWhitepaper": "Leer White Paper",
  "project.features": "Características Clave",
  "project.feature1": "Activación descentralizada de la red",
  "project.feature2": "Blockchain Solana rápido y seguro",
  "project.feature3": "Token del Hero💫Node ganador",
  "project.feature4": "Red activa y participativa",
  "project.feature5": "Roadmap transparente y estructurado",
  "project.stat1": "Hero💫Nodes Legendarios",
  "project.stat2": "Umbral de Activación",
  "project.stat3": "Token Ganador",
  "project.stat4": "Posibilidades",

  // Ritual subtitles
  "project.stat1Aura": "⚡ Energía de alta frecuencia",
  "project.stat2Aura": "🔥 Fuego colectivo",
  "project.stat3Aura": "❄️ Token revelado",
  "project.stat4Aura": "🪐 Arquitecturas infinitas",

  // Social
  "social.title": "Enlaces de la Red",
  "social.subtitle": "Únete a las plataformas y amplifica la señal",
  "social.followLatest": "Sigue las últimas transmisiones",
  "social.joinOurCommunity": "Unirse a la red",
  "social.realTimeChat": "Canal en tiempo real",
  "social.follow": "Seguir",
  "social.share": "Compartir la Leyenda",
  "social.shareSubtitle": "Extiende el fuego colectivo por la red",
  "social.shareX": "Compartir en X/Twitter",
  "social.shareTelegram": "Compartir en Telegram",
  "social.shareWhatsapp": "Compartir en WhatsApp",
  "social.callToAction": "Únete al ritual y camina con los Hero💫Nodes",
  "social.followOnX": "Seguir en X/Twitter",
  "social.xCommunity": "Unirse a la Comunidad X",
  "social.joinTelegram": "Unirse al Telegram oficial",
  "social.telegramNote":
    "🕰️ Cada amanecer y cada ocaso, las métricas se renuevan para reflejar el pulso vivo del fuego colectivo",

  // Common
  "common.home": "Inicio",
  "common.backHome": "Volver al inicio",

  // Timeline
  "timeline.title": "Evolución de los Hero💫Nodes",

  "timeline.monkesol.title": "MonkeSol emerge como Ancient Hero💫Archive 🔥",
  "timeline.monkesol.description":
    "Un constructo de memoria cifrada desciende, portando datos milenarios y estabilizando la capa de sabiduría de la red.",

  "timeline.zapsol.title": "ZapSol se activa como Lightning Hero💫Node ⚡",
  "timeline.zapsol.description":
    "Un pulso atronador enciende la red, acelerando el entramado con energía de plasma.",

  "timeline.chipisol.title": "ChipiSol se revela como Cosmic Hero💫Gateway ❄️",
  "timeline.chipisol.description":
    "Se abre una apertura cristalina que enlaza dimensiones y sincroniza rutas multiversales.",

  "timeline.union.title": "La convergencia de las tres arquitecturas ⚡🔥❄️",
  "timeline.union.description":
    "ZapSol, MonkeSol y ChipiSol sincronizan sus auras, formando la base tri‑capa del protocolo Solana Legends.",
  "timeline.closure":
    "Así emergió la primera tríada de Hero💫Nodes, unida en una nueva arquitectura cósmica.",

  // Gallery
  "gallery.title": "Salón de los Héroes ✨ Archivo Blueprint",
  "gallery.subtitle":
    "Explora las cámaras ritualizadas de ZapSol ⚡, MonkeSol 🔥 y ChipiSol ❄️",
  "gallery.footer":
    "Cada amanecer y cada ocaso, el fuego se renueva con la energía de la red",

  // Individual hero pages
  "chipisol.title": "❄️ ChipiSol",
  "chipisol.subtitle":
    "Cosmic Hero💫Gateway ❄️ una entidad dimensional que enlaza reinos y blockchains.",
  "chipisol.quote":
    "Los portales cristalinos preservan la memoria del universo y abren rutas hacia lo eterno.",

  "monkesol.title": "🔥 MonkeSol",
  "monkesol.subtitle":
    "Ancient Hero💫Archive 🔥 un constructo de sabiduría ancestral cifrada.",
  "monkesol.quote":
    "El fuego controlado ilumina el camino del conocimiento y estabiliza la memoria de la red.",

  "zapsol.title": "⚡ ZapSol",
  "zapsol.subtitle":
    "Lightning Hero💫Node ⚡ un conducto de energía de alta frecuencia y velocidad.",
  "zapsol.quote":
    "El rayo revela el camino de la claridad y despierta el pulso de la red.",
} as const;

/**
 * 🔹 Ahora extraemos las claves válidas a partir del bloque en inglés
 */

/**
 * 🔹 Componemos el objeto principal con satisfies
 */
const translations: Record<Language, Record<TranslationKeys, string>> = {
  en: enTranslations,
  es: esTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: TranslationKeys): string => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
