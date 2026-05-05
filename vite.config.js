import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // 👈 clave para que el móvil lo vea
    port: 5173
  }
});

