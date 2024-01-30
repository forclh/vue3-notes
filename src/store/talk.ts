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
      talkList: [
        { id: 'adlfalfj01', title: '你今天有点怪，哪里怪？怪好看的' },
        { id: 'adlfalfj02', title: '草莓，蓝莓，蔓越莓，你今天想我没？' },
        { id: 'adlfalfj03', title: '心里给你留了一块地，我的死心塌地' },
      ]
    }
  }
})