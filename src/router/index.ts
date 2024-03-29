import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/main-wrapper/MainWrapper.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
    },
    {
        path: '/auth/login',
        name: 'login',
        component: () => import('../components/authL/Login.vue'),
    },
    {
        path: '/auth/register',
        name: 'register',
        component: () => import('../components/authR/Register.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
