<template>
  <div class="person">
    <h1>情况二：监视【ref】定义的【对象类型数据】</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch } from 'vue'
// 数据
let person = ref({
  name: 'AK',
  age: 23
})

// 方法
function changeName() {
  person.value.name += '~'
}
function changeAge() {
  person.value.age += 1
}
function changePerson() {
  person.value = { name: '李四', age: 90 }
}

// 监视，情况二：监视【ref】定义的【对象类型数据】，监视的是对象的地址值，若想监视【对象内部属性】的变化，需要手动开启深度监视
// watch第一个参数是被监视的数据，第二个参数是数据发生改变时的回调函数，第三个参数是配置对象
// 1. 如果修改的是ref对象中的属性，则newValue和oldValue都是修改后的值（deep、immediate...）
// 2. 如果修改的是ref对象，则newValue是新对象，oldValue是旧对象
// 举例：换房子和换家具
watch(person, (newValue, oldValue) => {
  console.log('person变化了', newValue, oldValue)
}, {deep: true, immediate: true})
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

li {
  font-size: 20px;
}
</style>

