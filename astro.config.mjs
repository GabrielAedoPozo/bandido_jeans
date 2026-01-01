// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://GabrielAedoPozo.github.io',
    base: 'bandido_jeans',
    
    vite: {
      plugins: [tailwindcss()],
    },


});
