import Login from "@/views/Login";
import MainContent from "@/views/MainContent";
import {createRouter, createWebHistory} from "vue-router";
import Test from "@/views/Test";

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
                children: [
                    {
                        path: 'loopimg',
                        name:'Loopimg',
                        meta:{
                            name:'loopimg'
                        }
                    },
                    {
                        path: 'recommand',
                        name:'Recommand',
                        meta:{
                            name:'recommand'
                        }
                    },
                    {
                        path: 'user',
                        name:'User',
                        meta:{
                            name:'user'
                        }
                    },
                    {
                        path: 'item',
                        name:'Item',
                        meta:{
                            name:'item'
                        }
                    },
                    {
                        path: 'order',
                        name:'Order',
                        meta:{
                            name:'order'
                        }
                    },
                    {
                        path: 'role',
                        name:'Role',
                        meta:{
                            name:'role'
                        }
                    },
                    {
                        path: 'permission',
                        name:'Permission',
                        meta:{
                            name:'permission'
                        }
                    },
                    {
                        path: 'test',
                        name:'Test',
                        meta:{
                            name:'test'
                        },
                        component: Test
                    }
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