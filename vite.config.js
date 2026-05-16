import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";

const hostname = "https://yourdomain.com";

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname,
      dynamicRoutes: ["/", "/#about", "/#music", "/#gallery", "/#journey", "/#socials", "/#contact"],
    }),
  ],
});
