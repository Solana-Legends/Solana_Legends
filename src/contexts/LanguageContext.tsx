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
  "progress.subtitle": "Live telemetry of the active Solana🪐Legends network.",
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
  "progress.protocolActive": "⚡Ignition🔥Sequence Complete. Protocol Active.❄️",

// Project Info
  "project.title": "The Narrative Portal",
  "project.subtitle": "Solana Legends wasn't born to compete. It was born to ignite.",
  "project.whitepaper": "The Manifest",
  "project.whitepaperDesc": "Structure, Ritual, and Presence.",
  "project.whitepaperText": "This document is not an invitation. It is a filter. You won't find promises of success here, nor formulas for growth. You'll find conviction, structure, and ritual.",
  "project.readWhitepaper": "Enter the Portal",
  
  // Ritual Statutes (El bloque nuevo para rellenar el vacío)
  "project.ritualRules": "Ritual Statutes:",
  "project.rule1": "🧿 Filtration through vibration.",
  "project.rule2": "⚔️ Conviction over hype.",
  "project.rule3": "🔮 Holding is building.",

  "project.features": "Core Architecture",
  "project.feature1": "The Technical Altar: pump.fun as a portal of birth.",
  "project.feature2": "Guardian of the Pulse: Automated delta-neutral protection.",
  "project.feature3": "Ritualized Loyalty: Holding is building. Loyalty is rewarded.",
  "project.feature4": "Controlled Fire: No paid hype. Organic and strategic growth.",
  "project.feature5": "Pixar-Tier Standard: Epic, ritualized 3D visual language.",
  
  // Stats
  "project.stat1": "Forces in Resonance",
  "project.stat2": "System Capacity",
  "project.stat3": "Chosen Narrative",
  "project.stat4": "Sustained Fire",

  // Ritual subtitles
  "project.stat1Aura": "⚡ Ritual Complete",
  "project.stat2Aura": "❄️ Protocol active",
  "project.stat3Aura": "🔥 The shared fire",
  "project.stat4Aura": "🪐 Roots make no noise",

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
  "timeline.title": "The History of the Ritual 🪐",

  "timeline.monkesol.title": "MonkeSol emerges as Ancestral Fire 🔥",
  "timeline.monkesol.description":
    "A construct of encrypted memory descends, stabilizing the wisdom layer of the network. Today it rests in the archive as guardian of the past.",

  "timeline.zapsol.title": "ZapSol activates Maximum Frequency ⚡",
  "timeline.zapsol.description":
    "A thunderous pulse ignites the grid, competing for supremacy with plasma-grade energy.",

  "timeline.chipisol.title": "ChipiSol reveals the Cosmic Gateway ❄️",
  "timeline.chipisol.description":
    "A crystalline aperture links dimensions. Its structure was frozen and preserved in the archive to keep multiversal routes open.",

  "timeline.union.title": "The Ascension of the Definitive Hero💫Node 👑⚡",
  "timeline.union.description":
    "The ritual concludes and the community chooses speed. ZapSol rises as the official Hero Token, backed by the wisdom of fire and the resilience of ice.",
  
  "timeline.closure":
    "Three elemental architectures. A single victor. The Solana Legends protocol is complete.",

  // Gallery
  "gallery.title": "Hall of Heroes ✨ Blueprint Archive",
  "gallery.subtitle":
    "Explore the ritualized chambers of ZapSol ⚡, MonkeSol 🔥 and ChipiSol ❄️",
  "gallery.footer":
    "At every dawn and dusk, the fire renews with the network’s energy",

  // Individual hero pages
  "chipisol.title": "ChipiSol",
  "chipisol.subtitle": "ARCHIVED BLUEPRINT ❄️ DIMENSIONAL GATEWAY",
  "chipisol.quote": "The Icy Strategy is preserved in the portal. Its crystals protect the memory of the universe and keep the routes to the eternal open.",

  "monkesol.title": "MonkeSol",
  "monkesol.subtitle": "ARCHIVED BLUEPRINT 🔥 ANCESTRAL WISDOM",
  "monkesol.quote": "The Urban Fire remains in the archive. Its controlled flame illuminates the path of knowledge and stabilizes the network's memory.",

  "zapsol.title": "ZapSol",
  "zapsol.subtitle": "THE OFFICIAL HERO TOKEN ⚡ THE DEFINITIVE NETWORK CATALYST",
  "zapsol.quote": "The community has spoken. The ritual is complete. The lightning takes the throne and governs the pulse of Solana Legends.",
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
  "progress.subtitle": "Telemetría en vivo de la red activa de Solana🪐Legends.",
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
  "progress.protocolActive": "⚡Secuencia de Ignición🔥Completa. Protocolo Activo.❄️",

// Project Info
  "project.title": "El Portal Narrativo",
  "project.subtitle": "Solana Legends no nació para competir. Nació para encender.",
  "project.whitepaper": "El Manifiesto",
  "project.whitepaperDesc": "Estructura, Ritual y Presencia.",
  "project.whitepaperText": "Este documento no es una invitación. Es un filtro. No encontrarás promesas de éxito aquí, ni fórmulas de crecimiento. Encontrarás convicción, estructura y ritual.",
  "project.readWhitepaper": "Entrar al Portal",

  // Estatutos del Ritual (El bloque nuevo para rellenar el vacío)
  "project.ritualRules": "Estatutos del Ritual:",
  "project.rule1": "🧿 Filtrado por vibración.",
  "project.rule2": "⚔️ Convicción ante el hype.",
  "project.rule3": "🔮 Holdear es construir.",

  "project.features": "Arquitectura Central",
  "project.feature1": "El Altar Técnico: pump.fun como portal de nacimiento.",
  "project.feature2": "Guardián del Pulso: Protección delta-neutral automatizada.",
  "project.feature3": "Lealtad Ritualizada: Holdear es construir. Lealtad recompensada.",
  "project.feature4": "Fuego Controlado: Sin hype pagado. Crecimiento orgánico.",
  "project.feature5": "Estándar Pixar: Lenguaje visual 3D épico y ritualizado.",
  
  // Stats
  "project.stat1": "Fuerzas en Resonancia",
  "project.stat2": "Capacidad del Sistema",
  "project.stat3": "Narrativa Elegida",
  "project.stat4": "Fuego Sostenido",

  // Ritual subtitles
  "project.stat1Aura": "⚡ Ritual Completado",
  "project.stat2Aura": "❄️ Protocolo activo",
  "project.stat3Aura": "🔥 El fuego compartido",
  "project.stat4Aura": "🪐 Las raíces no hacen ruido",

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
  "timeline.title": "La Historia del Ritual 🪐",

  "timeline.monkesol.title": "MonkeSol emerge como Fuego Ancestral 🔥",
  "timeline.monkesol.description":
    "Un constructo de memoria cifrada desciende, estabilizando la capa de sabiduría de la red. Hoy descansa en el archivo como guardián del pasado.",

  "timeline.zapsol.title": "ZapSol activa la Frecuencia Máxima ⚡",
  "timeline.zapsol.description":
    "Un pulso atronador enciende la red, compitiendo por la supremacía con energía de grado-plasma.",

  "timeline.chipisol.title": "ChipiSol revela la Puerta Cósmica ❄️",
  "timeline.chipisol.description":
    "Una apertura cristalina vincula dimensiones. Su estructura fue congelada y preservada en el archivo para mantener abiertas las rutas multiversales.",

  "timeline.union.title": "La Ascensión del Hero💫Node Definitivo 👑⚡",
  "timeline.union.description":
    "El ritual concluye y la comunidad elige la velocidad. ZapSol se alza como el Hero Token oficial, respaldado por la sabiduría del fuego y la resiliencia del hielo.",
  
  "timeline.closure":
    "Tres arquitecturas elementales. Un único vencedor. El protocolo de Solana Legends ha sido completado.",

  // Gallery
  "gallery.title": "Salón de los Héroes ✨ Archivo Blueprint",
  "gallery.subtitle":
    "Explora las cámaras ritualizadas de ZapSol ⚡, MonkeSol 🔥 y ChipiSol ❄️",
  "gallery.footer":
    "Cada amanecer y cada ocaso, el fuego se renueva con la energía de la red",

  // Individual hero pages
  "chipisol.title": "ChipiSol",
  "chipisol.subtitle": "BLUEPRINT ARCHIVADO ❄️ PUERTA DIMENSIONAL",
  "chipisol.quote": "La Estrategia Gélida se preserva en el portal. Sus cristales protegen la memoria del universo y mantienen abiertas las rutas hacia lo eterno.",

  "monkesol.title": "MonkeSol",
  "monkesol.subtitle": "BLUEPRINT ARCHIVADO 🔥 SABIDURÍA ANCESTRAL",
  "monkesol.quote": "El Fuego Urbano permanece en el archivo. Su llama controlada ilumina el camino del conocimiento y estabiliza la memoria de la red.",

  "zapsol.title": "ZapSol",
  "zapsol.subtitle": "EL HERO TOKEN OFICIAL ⚡ EL CATALIZADOR DEFINITIVO DE LA RED",
  "zapsol.quote": "La comunidad ha hablado. El ritual se ha completado. El rayo asume el trono y gobierna el pulso de Solana Legends.",
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
