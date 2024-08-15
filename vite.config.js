import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // This ensures that Rollup can resolve the 'react-icons/fa' module
      external: ["react-icons/fa"],
    },
  },
});
