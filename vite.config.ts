import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@layouts': resolve(__dirname, './src/layouts'),
      '@routes': resolve(__dirname, './src/routes'),
      '@pages': resolve(__dirname, './src/pages'),
      '@': resolve(__dirname, './src'),
    },
  },
});
