import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: 8080,
  },
  plugins: [
    vue(),
    federation({
      name: 'dashboard',
      filename: 'dashboard.js',
      remotes: {
        test: "http://localhost:8081/teste.js",
      },
      exposes: {},
      shared: ['vue']
    })
  ]
})
