import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"
import { viteSourceLocator } from "@metagptx/vite-plugin-source-locator"

export default defineConfig(() => ({
  plugins: [
    viteSourceLocator({ prefix: "mgx" }),
    react(),
  ],
  server: {
    /* Polling activo: útil si desarrollas en entornos virtualizados o WSL */
    watch: { usePolling: true, interval: 800 },
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
  resolve: {
    alias: {
      /* Sincronizado con tsconfig.json: un solo alias raíz para evitar errores de ruta */
      "@": path.resolve(__dirname, "./src"),
    },
  },
  /* Eliminado tsconfigRaw vacío para permitir que Vite use la configuración nativa del tsconfig.json */
}))