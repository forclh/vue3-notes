<template>
  <div class="person">
    <h2>姓名：{{ name }}，{{ nl }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>

  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, toRefs, toRef } from 'vue'

// 数据
let person = reactive({
  name: 'AK',
  age: 23
})

// toRefs的作用就是把一个由reactive所定义的对象中的每一个key-value变成一个由ref所定义的对象
// toRef单独去一取key-value
// 两者生成的都是响应式对象

// console.log(toRefs(person))

let { name, age } = toRefs(person)
// console.log(age)


let nl = toRef(person, 'age')
console.log(nl.value)

// 方法
function changeName() {
  name.value += '~'  // 此时修改name相当于修改person.name
  console.log(name.value, person.name)
}
function changeAge() {
  age.value += 1
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

li {
  font-size: 20px;
}
</style>

