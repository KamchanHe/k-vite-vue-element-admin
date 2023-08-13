import { basename, resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

function getTimestamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  return `${year}${month}${day}${hour}${minute}`;
}

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        dts: 'src/auto-imports.d.ts',
        imports: ['vue', 'vue-router', 'pinia'],
        resolvers: [],
        eslintrc: {
          enabled: true
        }
      }),
      Components({
        dts: 'src/components.d.ts',
        dirs: [],
        resolvers: [],
        directoryAsNamespace: true
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    build: {
      outDir: resolve(__dirname, `dist/${basename(__dirname)}(${getTimestamp()})`),
      chunkSizeWarningLimit: 1024,
      rollupOptions: {
        output: {
          chunkFileNames: `static/js/[name]-[hash]-${getTimestamp()}.js`,
          entryFileNames: `static/js/[name]-[hash]-${getTimestamp()}.js`,
          assetFileNames: `static/[ext]/[name]-[hash]-${getTimestamp()}.[ext]`,
          manualChunks(id) {
            if (id.includes('node_modules/.pnpm')) {
              return id.toString().split('node_modules/.pnpm/')[1].split('node_modules/')[1].split('/')[0].toString();
            }
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      }
    }
  };
});
