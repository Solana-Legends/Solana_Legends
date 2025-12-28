import express from "express";
const router = express.Router();

function getManualCount(): number {
  const raw = process.env.VITE_COMMUNITY_FOLLOWERS_COUNT;
  if (!raw)
    throw new Error("❌ No se encontró VITE_COMMUNITY_FOLLOWERS_COUNT en .env");
  const parsed = parseInt(raw, 10);
  if (isNaN(parsed))
    throw new Error("❌ VITE_COMMUNITY_FOLLOWERS_COUNT no es un número válido");
  return parsed;
}

router.get("/", async (_req, res) => {
  try {
    const count = getManualCount();
    console.log(`[Comunidad X:manual] → ${count} miembros`);
    return res.json({ members: count, cached: true });
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error("❌ Comunidad X Manual Error:", e);
      return res.status(500).json({ error: e.message });
    } else {
      console.error("❌ Comunidad X Manual Error: Unknown error", e);
      return res.status(500).json({ error: "Error desconocido" });
    }
  }
});

export default router;
