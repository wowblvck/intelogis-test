import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes('@reduxjs/toolkit') ||
            id.includes('react-redux') ||
            id.includes('redux') ||
            id.includes('redux-saga')
          ) {
            return 'redux';
          }
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
            return 'react';
          }
          if (id.includes('leaflet') || id.includes('react-leaflet')) {
            return 'leaflet';
          }
          return null;
        },
      },
    },
    target: 'esnext',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@api': resolve(__dirname, './src/api'),
      '@components': resolve(__dirname, './src/components'),
      '@interfaces': resolve(__dirname, './src/interfaces'),
      '@layouts': resolve(__dirname, './src/layouts'),
      '@pages': resolve(__dirname, './src/pages'),
      '@reducers': resolve(__dirname, './src/reducers'),
      '@routes': resolve(__dirname, './src/routes'),
      '@sagas': resolve(__dirname, './src/sagas'),
      '@store': resolve(__dirname, './src/store'),
      '@utils': resolve(__dirname, './src/utils'),
    },
  },
});
