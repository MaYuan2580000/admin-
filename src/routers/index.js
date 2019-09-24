import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:()=>import('@/view/main'),
            children:[
                {
                    path:'',
                    component:()=>import('@/view/home'),
                    meta:{
                        title:'工作平台'
                    }
                }
                ,{
                    path:'/user',
                    component:()=>import('@/view/user/userlist'),
                    meta:{
                        title:'用户列表'
                    }
                }
            ]
        },
        {
            path:'/login',
            component:()=>import('@/view/userlogin/login'),
            meta:{
                title:'登录',
                anonymous:true
            }
        }
    ]
})
router.beforeEach((to,from,next)=>{
    document.title = to.meta.title+'- 练习'
    if(!to.meta.anonymous){
       if(sessionStorage.getItem("username")){
           next()
       }else{
           next('./login')
       }
    }
   next()
})
export default router