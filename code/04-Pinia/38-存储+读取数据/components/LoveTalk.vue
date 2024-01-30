<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">
import axios from 'axios'
import { nanoid } from 'nanoid'
import { useTalksStore } from '@/store/talk'

const talkStore = useTalksStore()

// 方法
async function getLoveTalk() {
  // try {
  //   // 发送请求
  //   let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')  // 连续结构赋值+重命名
  //   // 将请求回来的字符串，包装成对象
  //   let obj = { id: nanoid(), title }
  //   // 将对象放在数组中
  //   talkStore.talkList.unshift(obj)

  // } catch (error) {
  //   alert(error)
  // }
}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>@/store/talk