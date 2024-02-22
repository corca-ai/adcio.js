import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  resolve: {
    alias: {
      'adcio.js': require.resolve('adcio.js')
    },
  },
  plugins: [react(), tsconfigPaths()],
});
