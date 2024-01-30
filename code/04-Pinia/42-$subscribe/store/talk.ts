import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'
import axios from 'axios'


export const useTalksStore = defineStore('talk', {
  actions: {
    async getATalk() {
      try {
        // 发送请求
        let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')  // 连续结构赋值+重命名
        // 将请求回来的字符串，包装成对象
        let obj = { id: nanoid(), title }
        // 将对象放在数组中
        this.talkList.unshift(obj)

      } catch (error) {
        alert(error)
      }

    }
  },
  state() {
    return {
      talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
    }
  }
})