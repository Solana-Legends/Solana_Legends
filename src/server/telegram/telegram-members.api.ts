import express from 'express';
const router = express.Router();

// 🚧 Preparado para futuro: aquí irá la lógica real de la API de Telegram
router.get('/', async (_req, res) => {
  try {
    console.log('[Telegram:api] → aún no implementado');
    return res.json({ members: 0, cached: false });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Error desconocido';
    console.error('❌ Telegram API Error:', message);
    return res.status(500).json({ error: message });
  }
});

export default router;
