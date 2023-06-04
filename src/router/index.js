import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
// import SubscriptionPage from '../views/SubscriptionPage.vue'

const routes = [
    // { path: "/", redirect: "/index" },
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/SubscriptionPage',
        name: 'SubscriptionPage',
        component: () =>
            import ('../views/SubscriptionPage.vue')
    }
]

const router = createRouter({
    //history模式：createWebHistory , hash模式：createWebHashHistory
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
