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
            if (/CompWithoutStyleFile/i.test(name)) {
              // This will not import any style file 
              return false
            }
            return `vant/es/${name}/index.css`
          }
        },
        // {
        //   libName: 'ant-design-vue',
        //   style(name) {
        //     if (/popconfirm/.test(name)) {
        //       // support multiple style file path to import
        //       return [
        //         'ant-design-vue/es/button/style/index.css',
        //         'ant-design-vue/es/popover/style/index.css'
        //       ]
        //     }
        //     return `ant-design-vue/es/${name}/style/index.css`
        //   }
        // },
        // {
        //   libName: 'element-plus',
        //   style: (name) => {
        //     return`element-plus/lib/theme-chalk/${name}.css`
        //   }
        // }
      ]
    })
  ],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src')
    }
  },
  define: {
    _APP_VERSION: JSON.stringify(pkg.version),
  },
})