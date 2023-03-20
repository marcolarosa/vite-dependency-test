import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import commonjs from "vite-plugin-commonjs";
//
// https://vitejs.dev/config/
export default defineConfig({
    // plugins: [commonjs(), vue()],
    plugins: [vue()],
    optimizeDeps: {
        // entries: ["node_modules/@describo/crate-builder-component/**/*.js"],
        // include: ["@describo/crate-builder-component"],
    },
});
