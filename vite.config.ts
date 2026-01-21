import { defineConfig } from "vite"
import deno from "@deno/vite-plugin"
import tailwind from "@tailwindcss/vite"
import preact from "@preact/preset-vite"

export default defineConfig({
  plugins: [
    deno(),
    tailwind(),
    preact(),
  ],
})
