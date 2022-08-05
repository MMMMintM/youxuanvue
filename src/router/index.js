import Login from "@/views/Login";
import MainContent from "@/views/MainContent";
import {createRouter, createWebHistory} from "vue-router";
import routerTree from "@/router/getDynamicRouter";

const Index = () => import('../views/Index')
/*
创建路由表
 */
const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/index',
        name: 'Index',
        meta: {
            name: '首页'
        },
        component: Index,
        redirect: '/index/mainContent',
        children: [
            {
                path: 'mainContent',
                name: 'MainContent',
                meta: {
                    name: 'MainContent'
                },
                component: MainContent,
                redirect: {path: '/index/mainContent/main'},
                children: routerTree
            }
        ]
    }
]
/*
创建路由实例
 */

const router = createRouter({
    history: createWebHistory(),
    routes
})


export {router}