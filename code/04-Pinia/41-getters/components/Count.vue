<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}, 放大十倍后{{ bigSum }}</h2>
    <h3>欢迎来到{{ school }}， 坐落于：{{ address }}, 大写{{ upperSchool }}</h3>
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
import { ref, toRefs } from 'vue'
import { storeToRefs } from 'pinia';
// 引入userCountStore
import { userCountStore } from '@/store/count';
// 使用userCountStore，得到一个专门保存count相关的store
const countStore = userCountStore()
// console.log('!!!!', toRefs(countStore))  // 代价太大，没必要

// storeToRefs只会关注store中的数据,不对方法进行ref包裹
// console.log('!!!!', storeToRefs(countStore))
const {sum, school, address, bigSum, upperSchool} = storeToRefs(countStore)



// 数据
let n = ref(1)

// 方法
function add() {
  countStore.increment(n.value)
}
function minus() {
  countStore.sum -= n.value
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