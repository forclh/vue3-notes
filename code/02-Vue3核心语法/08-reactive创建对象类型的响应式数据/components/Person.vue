<template>
  <div class="person">
    <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名字</button>
    <br>
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="changeObj">测试</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive } from 'vue'

// reactive 定义对象类型的响应式数据，生成响应式对象

// 数据
let car = reactive({ brand: '奔驰', price: 100 })
let games = reactive([
  { id: '01', name: '王者荣耀' },
  { id: '02', name: '无主之地' },
  { id: '03', name: '幻兽帕鲁' }
])

let obj =reactive({
  a: {
    b: {
      c: 666
    }
  }
})


// 方法
function changePrice() {
  car.price += 10
  console.log(car)
}

function changeFirstGame() {
  games[0].name = '深岩银河'
}

function changeObj() {
  obj.a.b.c = 888
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

