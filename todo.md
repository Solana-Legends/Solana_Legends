🛡️ Plan de Desarrollo: Solana Legends (Fase de Guerra)
1. Arquitectura de Conversión (Prioridad Máxima)
[ ] src/components/HeroSection.tsx:

Integrar CA (Contract Address) con botón "Click to Copy" animado.

Botón primario: "BUY $ZAPSOL" (Link directo a Pump.fun).

Botón secundario: "JOIN THE RITUAL" (Link a Telegram).

Eliminar cualquier referencia a "White Paper" como acción principal; mover a pie de página.

[ ] src/components/CharacterGallery.tsx:

Actualizar estado visual: ZapSol (ACTIVE/IGNITED), Monke/Chipi (ON DECK).

Eliminar los candados ("Locked") que sugieren inactividad; sustituirlos por "Legend Loading".

[ ] src/components/LiveVibration.tsx (Sustituye a FollowerCounter.tsx):

Pivotar métrica: En lugar de seguidores en X, mostrar "Active Guardians" o "Market Progress".

Integrar visualmente que el 100% de la curva es el objetivo de "Ascensión".

2. Infraestructura de Comunidad
[ ] src/components/PocoIntegration.tsx (Sustituye a SubscriptionForm.tsx):

Sección dedicada al Poco Bot.

Explicar brevemente la utilidad: /boost para verificar compras y /duel para estatus social.

Llamada a la acción: "Prueba tu lealtad en el chat".

[ ] src/components/SocialLinks.tsx:

Mantener Telegram como enlace prioritario.

X (Twitter) marcado como "Under Transmission Interference" (si sigue suspendida) para integrar el baneo en el Lore.

3. Optimización Técnica (Rendimiento Crítico)
[ ] Optimización de Video:

Implementar lazy loading y muted/autoplay/playsinline para HeroesLevitan.mp4.

Asegurar que el video no bloquee el renderizado del CA (Contract Address).

[ ] Mobile First Audit:

Asegurar que el botón de compra sea accesible con el pulgar en la primera pantalla sin hacer scroll.

[ ] SEO & Metadata:

Actualizar index.html con keywords de alta fricción: Solana, Meme, ZapSol, The Guardian, Pump.fun.