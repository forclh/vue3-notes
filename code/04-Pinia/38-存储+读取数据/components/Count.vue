<template>
  <div class="count">
    <h2>当前求和为：{{ countStore.sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="minus">-</button>
  </div>
</template>

<script lang="ts" setup name="Count">
import { ref, reactive } from 'vue'
import { userCountStore } from '@/store/count';

const countStore = userCountStore()
// 一下两种方式都可拿到state中的数据
// console.log('@@', countStore.sum)  // 不需要.value
// console.log('@@', countStore.$state.sum)  

/**
 * 说明： 自己定义的ref数据需要.value来读取
 *        reacvite对象(Proxy)包裹的ref数据(ref)则自动解包，不需要使用.value来获取数据
 */
// let x = ref(9)
// console.log(x.value)
// let obj = reactive({
//   a: 1,
//   b: 2,
//   c: 3
// })
// console.log(obj.a, obj.c)



// 数据
let n = ref(1)  // 用户选择的数字

// 方法
function add() {
}
function minus() {
}
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select,
button {
  margin: 0 5px;
  height: 20px;
}
</style>