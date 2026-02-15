import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/",
  resolve: {
    alias: {
      "react-icons": path.resolve(__dirname, "src/lib/react-icons"),
    },
  },
});
