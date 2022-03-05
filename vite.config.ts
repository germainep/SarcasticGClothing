import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      Components: path.resolve(__dirname, './src/Components'),
    },
  },
  plugins: [react()],
  test: {},
});
