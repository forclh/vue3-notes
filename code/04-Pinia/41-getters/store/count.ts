import { defineStore } from 'pinia'


/**
 * 1. 注意遍历变量命名 采用useXxxXxx的方式
 * 2. defineStore() 第一个参数相当于id值，最好和文件名相同
 * 3. 第二个参数式一个配置对象，其中state()返回一个对象，是真正存储数据的地方; 
 *    actions里面放置动作方法，用于响应组件中的动作; getters里面可以进行书的加工
 * 4. 对外暴露
 */
export const userCountStore = defineStore('count', {
  actions: {
    increment(value: number) {
      // this表示当前的store
      // console.log(this)
      if (this.sum < 10) {
        this.sum += value
      }
    }
  },
  // 真正存储数据的地方 
  state() {
    return {
      sum: 1,
      school: 'cuc',
      address: '朝阳区'
    }
  },
  getters: {
    // 写法一: 使用state参数
    bigSum: state => state.sum * 10,
    // 写法二: 使用this(this就是state)
    upperSchool(): string {
      return this.school.toUpperCase()
    }

  }
})