import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// Config isolada para gerar um build SPA estático (GitHub Pages).
// NÃO afeta o build padrão do Lovable, que continua usando vite.config.ts (SSR).
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [
    tsConfigPaths(),
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: { "@": path.resolve(process.cwd(), "src") },
    dedupe: ["react", "react-dom", "@tanstack/react-router"],
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});