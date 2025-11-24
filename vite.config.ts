import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { viteSourceLocator } from '@metagptx/vite-plugin-source-locator';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: { mode: string }) => {
  return {
    plugins: [
      viteSourceLocator({
        prefix: 'mgx',
      }),
      react(),
    ],
    server: {
      watch: { usePolling: true, interval: 800 },
      proxy: {
        // 🔮 Redirige todas las llamadas a /api al backend en localhost:3001
        '/api': 'http://localhost:3001',
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
      },
    },
  };
});
