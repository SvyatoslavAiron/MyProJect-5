import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svg from "@neodx/svg/vite";

export default defineConfig({
  plugins: [
    react(),
    svg({
      root: "./src/assets/images/icons/",
      output: "public",
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
