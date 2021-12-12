import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path : "/",
        name : "home",
        component: () => import('@/components/HelloWorld.vue')
    },
    {
        path : "/login",
        name : "login",
        component: () => import('@/views/login/Main.vue')
    },
    {
        path : "/register",
        name : "register",
        component: () => import('@/views/register/Main.vue')
    },
    {
        path : "/dashboard",
        name : "dashboard",
        component: () => import('@/views/dashboard/Main.vue')
    },
    {
        path : "/profil",
        name : "profil",
        component: () => import('@/views/profil/Main.vue')
    },
    {
        path : "/about",
        name : "about",
        component: () => import('@/views/about/Main.vue')
    },
    {
        path : "/user",
        name : "user",
        component: () => import('@/views/user/Main.vue')
    },
    {
        path : "/user/:id/:username?",
        name : "detailuser",
        component: () => import("@/views/user/DetailUser.vue")
    },
    {
        path : "/create-user",
        name : "createuser",
        component: () => import("@/views/user/FormCreate.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
