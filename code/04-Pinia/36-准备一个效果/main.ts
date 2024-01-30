// 映入createApp用于创建应用
import { createApp } from "vue"
// 引入App根组件
import App from './App.vue'

// 创建根组件应用
const app = createApp(App);
// 将整个应用挂在到id为app的容器上
app.mount('#app')