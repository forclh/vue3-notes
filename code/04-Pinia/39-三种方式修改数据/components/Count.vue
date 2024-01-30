<template>
  <div class="count">
    <h2>当前求和为：{{ countStore.sum }}</h2>
    <h3>欢迎来到{{ countStore.school }}， 坐落于：{{ countStore.address }}</h3>
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
import { ref } from 'vue'
// 引入userCountStore
import { userCountStore } from '@/store/count';
// 使用userCountStore，得到一个专门保存count相关的store
const countStore = userCountStore()

// 数据
let n = ref(1)

// 方法
function add() {
  // 第一种修改方式
  // countStore.sum += n.value

  // 第二种修改方式，批量变更
  // countStore.$patch({
  //   sum: 888,
  //   school: '中传',
  //   address: '定福庄'
  // })

  // 第三种修改方式
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