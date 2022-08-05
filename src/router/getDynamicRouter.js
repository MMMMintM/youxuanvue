
let routerTree = [
    {
        path: 'main',
        name: 'Main',
        meta: {
            name: 'main'
        },
        component: () => import("@/views/Main")
    },
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
        component: ()=>import("@/views/Test")
    }
]

export default routerTree;