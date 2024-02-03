<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>地址：{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref } from 'vue'

let name = ref("AK");  // ref定义基本类型的响应式数据
let age = ref(23)
let tel = "15666666666"
let address = '北京市朝阳区'

console.log(name)
console.log(tel)

// 方法
function changeName() {
  name.value = "A--K"
  console.log(name.value)
}
function changeAge() {
  age.value += 1
}
function showTel() {
  alert(tel)
}
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>
