import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'
import vitePluginImp from 'vite-plugin-imp'

export default defineConfig({
  plugins: [
    vue(),
    vitePluginImp({
      libList: [
        {
          libName: 'vant',
          style(name) {
            console.log({
              name,
            })
            if (name === 'form') {
              return false
            }
            if (/CompWithoutStyleFile/i.test(name)) {
              // This will not import any style file 
              return false
            }
            return `vant/es/${name}/index.css`
          }
        },
      ]
    })
  ],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src')
    },
  },
  server: {
    port: 621,
    open: true,
    proxy: {
      '/api': {
        target: 'http://alpha.dhms.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      },
    }
  },
  define: {
    _APP_VERSION: JSON.stringify(pkg.version),
  },
})