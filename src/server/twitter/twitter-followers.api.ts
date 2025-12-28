import express from 'express';
const router = express.Router();

// 🚧 Preparado para futuro: aquí irá la lógica real de Twitter API
router.get('/', async (_req, res) => {
  try {
    console.log('[Twitter:api] → aún no implementado');
    return res.json({ followers: 0, cached: false });
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error('❌ Twitter API Error:', e);
      return res.status(500).json({ error: e.message });
    } else {
      console.error('❌ Twitter API Error: Unknown error', e);
      return res.status(500).json({ error: 'Error desconocido' });
    }
  }
});

export default router;
