import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          devScript: process.env.NODE_ENV === 'development' ? `
            <script type="module" src="http://localhost:5173/@vite/client"></script>
            <script type="module">
              import RefreshRuntime from 'http://localhost:5173/@react-refresh';
              RefreshRuntime.injectIntoGlobalHook(window);
              window.$RefreshReg$ = () => {};
              window.$RefreshSig$ = () => (type) => type;
              window.__vite_plugin_react_preamble_installed__ = true;
            </script>
          ` : '',
        }
      }
    })
  ],
  base: '/SOS13/', // Ensure this is set correctly for your deployment
  build: {
    outDir: 'dist', // Output directory for the build files
  }
})
