import Index from "@/views/Index"

import {createRouter, createWebHistory} from "vue-router";

/*
创建路由表
 */
const routes = [
    {
        path:"/",
        name:'Index',
        component:Index,
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