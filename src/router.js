import { createRouter, createWebHistory } from "vue-router";
import Main from "./components/Main.vue";
const routes = [
    {
        path: "/",
        name: "Main",
        components: {
            default: Main,
        },
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
