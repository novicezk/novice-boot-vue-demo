import { createRouter, createWebHashHistory } from "vue-router";
import Admin from 'novice-boot-vue/src/views/Admin.vue'
import Home from "novice-boot-vue/src/views/Home.vue";
import Login from "novice-boot-vue/src/views/Login.vue";

const routes = [
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    },
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
