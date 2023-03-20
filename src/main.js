import { createApp } from "vue";
import App from "./App.vue";
import DescriboCrateBuilder from "@describo/crate-builder-component/src/crate-builder/index.js";

const app = createApp(App);
app.use(DescriboCrateBuilder);
app.mount("#app");
