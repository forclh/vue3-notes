<template>
  <div class="person">
    <h1>情况四：情况四：监视响应式对象里的【某个属性】</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}, {{ person.car.c2 }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeFirstCar">修改第一台车</button>
    <button @click="changeSecondCar">修改第二台车</button>
    <button @click="changeCar">修改所有车</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, watch } from 'vue'
// 数据
let person = reactive({
  name: 'AK',
  age: 23,
  car: {
    c1: '奔驰',
    c2: '宝马'
  }
})

// 方法
function changeName() {
  person.name += '~'
}
function changeAge() {
  person.age += 1
}
function changeFirstCar() {
  person.car.c1 = '法拉利'
}
function changeSecondCar() {
  person.car.c2 = '兰博基尼'
}

function changeCar() {
  person.car = { c1: '凯迪拉克', c2: '特斯拉' }
}
// 情况四：监视响应式对象里的某个属性
// 1. 该属性为基本类型时：要写成函数的形式（watch监视了一个getter函数（返回一个值的函数））
// 2. 该属性为对象类型时：可以直接写，更推荐写成函数式

// watch(() => person.name, (newValue, oldValue) => {
//   console.log('person.name变化了', newValue, oldValue)
// })

// watch(person.car, (newValue, oldValue) => {
//   console.log('person.car变化了', newValue, oldValue)
// })
// 建议写成函数
watch(() => person.car, (newValue, oldValue) => {
  console.log('person.car变化了', newValue, oldValue)
}, {deep: true})


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

