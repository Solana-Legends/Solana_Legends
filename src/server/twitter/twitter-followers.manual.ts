import express from "express";
const router = express.Router();

function getManualCount(): number {
  const raw = process.env.VITE_TWITTER_FOLLOWERS_COUNT;
  if (!raw)
    throw new Error("❌ No se encontró VITE_TWITTER_FOLLOWERS_COUNT en .env");
  const parsed = parseInt(raw, 10);
  if (isNaN(parsed))
    throw new Error("❌ VITE_TWITTER_FOLLOWERS_COUNT no es un número válido");
  return parsed;
}

router.get("/", async (_req, res) => {
  try {
    const count = getManualCount();
    console.log(`[Twitter:manual] → ${count} seguidores`);
    return res.json({ followers: count, cached: true });
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error("❌ Twitter Manual Error:", e);
      return res.status(500).json({ error: e.message });
    } else {
      console.error("❌ Twitter Manual Error: Unknown error", e);
      return res.status(500).json({ error: "Error desconocido" });
    }
  }
});

export default router;
