import MainContent from "@/views/MainContent";

import {createRouter, createWebHistory} from "vue-router";

const Index = () => import('../views/Index')
/*
创建路由表
 */
const routes = [
    {
        path:"/",
        name:'Index',
        component:Index,
        children:[
            {
                path:'mainContent',
                name:'MainContent',
                meta:{
                    name:'MainContent'
                },
                component:MainContent,
                redirect:{
                    path:'/mainContent'
                },
                children:[

                ]

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