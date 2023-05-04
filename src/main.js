import "./tailwind.css";
import { createApp } from "vue";
import App from "./App.vue";
import DescriboCrateBuilder from "@describo/crate-builder-component";

const app = createApp(App);
app.use(DescriboCrateBuilder);
app.mount("#app");
