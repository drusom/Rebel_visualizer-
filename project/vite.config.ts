import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    server: {
      host: true, // Expose on local network
      port: 5173, // Default Vite port
      proxy: {
        // Proxy API calls to backend during development
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
        },
      },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    build: {
      outDir: 'dist',
    },
    base: '/', // Default base path for local development
  };

  // For production builds, use GitHub Pages path
  if (command === 'build') {
    config.base = '/Rebel_visualizer-/'; // Updated for new repo name
  }

  return config;
});
