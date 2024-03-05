import { defineConfig } from 'vite'

import manifest from './manifest.ts';
import { resolve } from 'path';
import * as fs from 'fs';


// import react from '@vitejs/plugin-react-swc'
// import hotReloadExtension from 'hot-reload-extension-vite';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // hotReloadExtension({
    //   log: true,
    //   backgroundPath: 'src/background.ts' 
    // }),
    {
      name:"make-manifest",
      writeBundle() {
        const manifestPath = resolve("dist", 'manifest.json');
        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
      }
      
    }

  ],
  build: {
    rollupOptions: {
      input: {
        popup: 'src/popup/index.html',
        background: 'src/background.ts',
        content: 'src/content.ts',
        content_style: 'src/content.css',
      },
      output:{
        entryFileNames: 'src/[name].js',
        // chunkFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.')[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
            return `assets/${extType}/[name]-[hash][extname]`;
          }else{
            return 'src/[name].[ext]';
          }
          // return `assets/${extType}/[name]-[hash][extname]`;
        }, 
      }
    },
    commonjsOptions: {
      include: [/node_modules/],
    },
  }

})