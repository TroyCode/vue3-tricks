import { defineConfig } from "vite";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: [
        resolve(__dirname, "./src/locales/**"),
        resolve(__dirname, "./src/events/**"),
      ],
    }),
  ],
});
