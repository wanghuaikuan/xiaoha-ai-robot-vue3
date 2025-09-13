import { createRouter,createWebHashHistory } from "vue-router";


const routes =[
    {
        path: '/',
        component:()=>import('@/views/Index.vue'),
        meta:{
            title: '小哈 AI 机器人首页' // 页面标题
        }
    }
]

const router =createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router