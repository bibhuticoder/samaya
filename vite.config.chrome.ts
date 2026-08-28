import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

const rootDir = import.meta.dirname;

function copyDirRecursive(src: string, dest: string) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-chrome-manifest-and-assets',
      closeBundle() {
        const outDir = path.resolve(rootDir, 'extension/chrome');
        const iconsDir = path.resolve(outDir, 'icons');
        const assetsDir = path.resolve(outDir, 'assets');
        
        if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir, { recursive: true });
        if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

        // Copy manifest
        fs.copyFileSync(
          path.resolve(rootDir, 'src/extension/manifest.chrome.json'),
          path.resolve(outDir, 'manifest.json')
        );

        // Copy icons
        fs.copyFileSync(
          path.resolve(rootDir, 'public/assets/favicon.png'),
          path.resolve(iconsDir, 'favicon.png')
        );
        fs.copyFileSync(
          path.resolve(rootDir, 'public/assets/chrome_icon.png'),
          path.resolve(iconsDir, 'chrome_icon.png')
        );

        // Copy all public assets (including background.jpg, icons, etc.)
        copyDirRecursive(path.resolve(rootDir, 'public/assets'), assetsDir);
      },
    },
  ],
  root: path.resolve(rootDir, 'src/extension'),
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(rootDir, 'src'),
    },
  },
  build: {
    outDir: path.resolve(rootDir, 'extension/chrome'),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(rootDir, 'src/extension/index.html'),
    },
  },
});
