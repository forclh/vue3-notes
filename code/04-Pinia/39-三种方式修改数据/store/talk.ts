import { defineStore } from 'pinia'


export const useTalksStore = defineStore('talk', {
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