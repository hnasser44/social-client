/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    // To access env vars here use process.env.TEST_VAR
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: process.env.SERVER_URL,
          changeOrigin: true,
          ws: true,
        },
      },
    },
  });
};
