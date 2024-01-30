// 创建一个路由器，并暴露出去

// 1. 引入createRouter
import { createRouter, createWebHistory } from 'vue-router'
// 引入一个个路由组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 2. 创建路由器，传入配置对象
const router = createRouter({
  history: createWebHistory(),  // 路由器的工作模式（之后讲解）
  routes: [  // 一个个的路由，每一个路由都是key-value组成的对象
    {
      name: 'zhuye',  // 路由命名
      path: '/home',
      component: Home
    },
    {
      name: 'xinwen',
      path: '/news',
      component: News,
      children: [
        {
          name: 'xiang',  // 路由命名
          path: 'detail/:id/:title/:content?',  // params传参需要占位符，?表示可有可无
          component: Detail
        }
      ]
    },
    {
      name: 'guanyu',
      path: '/about',
      component: About
    }
  ]
})

// 3. 暴露组件
export default router

// 4. 在main.ts中引入

