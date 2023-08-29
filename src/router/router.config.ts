import type { RouteRecordRaw } from 'vue-router'

export const routers: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        redirect: '/home',
        component: () => import('@/layouts/LayoutIndex.vue'),
        children: [
            {
                path: '/home',
                component: () => import('@/views/home/HomeView.vue'),
                meta: { title: '首页', keepAlive: false }
            },
            {
                path: '/login',
                component: () => import('@/views/home/UserLoginView.vue'),
                meta: { title: '登录', keepAlive: false }
            }
        ]
    },
    {
        path: '/admin',
        name: 'admin',
        redirect: '/admin',
        component: () => import('@/layouts/LayoutAdmin.vue'),
        children: [
            {
                path: '/admin',
                component: () => import('@/views/admin/AdminView.vue'),
                meta: { title: '管理后台', keepAlive: false }
            }
        ]
    },
    { path: '/:pathMatch(.*)*', name: 'notFound', component: () => import('@/views/other/NotFound.vue') }
]
