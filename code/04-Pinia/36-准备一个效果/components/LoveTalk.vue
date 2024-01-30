<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">
import { reactive } from 'vue'
import axios from 'axios'
import { nanoid } from 'nanoid'

// 数据
let talkList = reactive([
  { id: 'adlfalfj01', title: '你今天有点怪，哪里怪？怪好看的' },
  { id: 'adlfalfj02', title: '草莓，蓝莓，蔓越莓，你今天想我没？' },
  { id: 'adlfalfj03', title: '心里给你留了一块地，我的死心塌地' },
])

// 方法
async function getLoveTalk() {
  try {
    // 发送请求
    let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')  // 连续结构赋值+重命名
    // 将请求回来的字符串，包装成对象
    let obj = { id: nanoid(), title }
    // 将对象放在数组中
    talkList.unshift(obj)

  } catch (error) {
    alert(error)
  }

}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>