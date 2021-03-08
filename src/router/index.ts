import {
    createWebHistory,
    createRouter,
} from 'vue-router'

import Home from 'src/views/Home/index.vue'
import MyInput from 'src/views/MyInput/index.vue'
import Shop from 'src/views/Shop/index.vue'
import WithChildren from 'src/views/withChildren/index.vue'
import VantTest from 'src/views/VantTest/index.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/myInput',
        name: 'MyInput',
        component: MyInput
    },
    {
        path: '/shop',
        name: 'Shop',
        component: Shop
    },
    {
        path: '/withChildren',
        name: 'WithChildren',
        component: WithChildren
    },
    {
        path: '/vantTest',
        name: 'VantTest',
        component: VantTest
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
