import {createStore} from "vuex";
import vuexAlong from 'vuex-along'

const store = createStore({
    state: {
        // 全局属性
        // 如果没有模块化，很多模块的属性，都在这里声明
        navTree: [],
        childrenTree:[]
    },
    // 同步操作赋值
    mutations: {
        // 赋值操作
        setNavTree(state, navTree) {
            state.navTree = navTree;
            console.log("给navTree赋值：", navTree)
        },
        setChildrenTree(state,childrenTree){
            state.childrenTree = childrenTree
            console.log("给ChildrenTree赋值", childrenTree)
        }
    },
    actions: {
        /*
        如果有异步操作，网络请求某个数据后，再进行赋值
         */
    },
    getters: {
        getNavTree(state) {
            return state.navTree
        },
        getChildrenTree(state){
            return state.childrenTree
        }
    },
    plugins: [vuexAlong({
        name: 'test',
        local: {
            navTree:["navTree"],
            childrenTree:["childrenTree"]
        }
    })]
})
export default store