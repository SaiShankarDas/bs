import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          // lucide-react, react-datepicker, react-phone-number-input, 
          // @use-gesture/react are now auto-split into lazy chunks
          // based on which page imports them — no upfront loading
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
