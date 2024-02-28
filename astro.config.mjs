import { defineConfig } from "astro/config"
import UnoCSS from "unocss/astro"

// https://astro.build/config
export default defineConfig({
  site: "https://yulei.monster",
  integrations: [
    UnoCSS({
      injectReset: true, // or a path to the reset file
    }),
  ],
})
