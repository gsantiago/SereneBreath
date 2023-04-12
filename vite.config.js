import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    checker({ typescript: true }),
    VitePWA({
      includeAssets: [
        "logo.svg",
        "/images/apple-touch-icon.png",
        "/images/masked-icon.png",
        "/audio/bell.mp3",
        "/audio/bell_1.mp3",
        "/audio/bell_2.mp3",
        "/audio/en/female_inhale.mp3",
        "/audio/en/female_hold.mp3",
        "/audio/en/female_exhale.mp3",
        "/audio/en/male_inhale.mp3",
        "/audio/en/male_hold.mp3",
        "/audio/en/male_exhale.mp3",
        "/audio/pt/female_inhale.mp3",
        "/audio/pt/female_hold.mp3",
        "/audio/pt/female_exhale.mp3",
      ],
      registerType: "autoUpdate",
      devOptions: { enabled: true },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,mp3}"],
      },
      manifest: {
        name: "SereneBreath",
        short_name: "SereneBreath",
        start_url: ".",
        display: "fullscreen",
        background_color: "#e0f2fe",
        theme_color: "#e0f2fe",
        description: "Relax and breath",
        icons: [
          {
            src: "/logo.svg",
            type: "image/svg+xml",
            sizes: "512x512",
          },
          {
            src: "/images/icons-192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "/images/icons-512.png",
            type: "image/png",
            sizes: "512x512",
          },
          {
            src: "/images/masked-icon.png",
            type: "image/png",
            sizes: "196x196",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
