import { createApp } from "vue"
import App from './App.vue'
// 1. 引入pinia
import { createPinia } from 'pinia'

const app = createApp(App)
// 2. 创建pinia(在创建app后面)
const pinia = createPinia()
// 3. 安装pinia(开发者工具出现pinia选项)
app.use(pinia)

app.mount('#app')