import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import requireTransform from 'vite-plugin-require-transform';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), requireTransform({})],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  }
});
