<template>
  <div class="person">
    <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changeCar">修改汽车</button>
    <hr>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive } from 'vue'


// 数据
// let car = reactive({ brand: '奔驰', price: 100 })
let car = ref({ brand: '奔驰', price: 100 })
let sum = ref(0);

// 方法
function changePrice() {
  car.value.price += 10
}
function changeBrand() {
  car.value.brand = '迈凯伦'
}
function changeCar() {
  // reactive的缺点
  // car = { brand: '法拉利', price: 500 }
  // car = reactive({ brand: '法拉利', price: 500 })
  // 以上两种方法都失去了响应式，可以使用Object.assign()方法实现
//  Object.assign(car, { brand: '法拉利', price: 500 })

  // ref可以直接赋值对象更新
  car.value = { brand: '法拉利', price: 500 }
}
function changeSum() {
  // sum = ref(0)  // 失败
  sum.value += 1
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

