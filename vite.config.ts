import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"
import { viteSourceLocator } from "@metagptx/vite-plugin-source-locator"

export default defineConfig(({ mode }) => ({
  plugins: [
    viteSourceLocator({ prefix: "mgx" }),
    react(),
  ],
  server: {
    watch: { usePolling: true, interval: 800 },
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  esbuild: {
    tsconfigRaw: {}
  }
}))
