import { defineConfig, presetUno, presetIcons, presetTypography, presetWebFonts } from "unocss"

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      /* options */
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        hand: "Gochi Hand",
        serif: "Merriweather",
      },
    }),
  ],
})
