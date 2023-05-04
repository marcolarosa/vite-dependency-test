import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import commonjs from "vite-plugin-commonjs";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

//
// https://vitejs.dev/config/
export default defineConfig({
    // plugins: [commonjs(), vue()],
    plugins: [
        vue(),
        // ...
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    optimizeDeps: {
        include: ["element-plus", "lodash", "@describo/crate-builder-component"],
    },
});
