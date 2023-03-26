import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import externalGlobals from 'rollup-plugin-external-globals'

let globals = externalGlobals({
  vue: 'Vue',
  'vue-router': 'VueRouter',
  pinia: 'Pinia',
  'element-plus': 'ElementPlus',
  'axios': 'axios',
  'icons-vue': 'IconsVue'
});

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
        // 配置打包忽略
      external: ['vue', 'vue-router', 'pinia', 'element-plus', 'axios', 'icons-vue'],
      plugins: [globals]
    }
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
