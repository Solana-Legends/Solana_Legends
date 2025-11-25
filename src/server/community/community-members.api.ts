import express from 'express';
const router = express.Router();

// 🚧 Preparado para futuro: aquí irá la lógica real de la API de Comunidad X
router.get('/', async (_req, res) => {
  try {
    console.log('[Comunidad X:api] → aún no implementado');
    return res.json({ members: 0, cached: false });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Error desconocido';
    console.error('❌ Comunidad X API Error:', message);
    return res.status(500).json({ error: message });
  }
});

export default router;
