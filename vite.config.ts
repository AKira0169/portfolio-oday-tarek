import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/portfolio-oday-tarek/",
  // .docx isn't in Vite's default asset list, so importing the CV from public/
  // (to get the base-path-prefixed URL) needs it registered as an asset type.
  assetsInclude: ["**/*.docx"],
});
