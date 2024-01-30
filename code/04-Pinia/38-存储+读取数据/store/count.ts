import { defineStore } from 'pinia'


/**
 * 1. 注意遍历变量命名 采用useXxxXxx的方式
 * 2. defineStore() 第一个参数相当于id值，最好和文件名相同
 * 3. 第二个参数式一个配置对象，其中state()返回一个对象，是真正存储数据的地方
 * 4. 对外暴露
 */
export const userCountStore = defineStore('count', {
  // 真正存储数据的地方 
  state() {
    return {
      sum: 6
    }
  }
})